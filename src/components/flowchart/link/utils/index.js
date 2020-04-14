import PF from "pathfinding";
import paper from "paper";

const MATRIX_PADDING = 5;

export const generateCurvePath = (startPos, endPos) => {
  const width = Math.abs(startPos.x - endPos.x);
  const height = Math.abs(startPos.y - endPos.y);
  const leftToRight = startPos.x < endPos.x;
  const topToBottom = startPos.y < endPos.y;
  const isHorizontal = width > height;

  let start;
  let end;
  if (isHorizontal) {
    start = leftToRight ? startPos : endPos;
    end = leftToRight ? endPos : startPos;
  } else {
    start = topToBottom ? startPos : endPos;
    end = topToBottom ? endPos : startPos;
  }

  const curve = isHorizontal ? width / 3 : height / 3;
  const curveX = isHorizontal ? curve : 0;
  const curveY = isHorizontal ? 0 : curve;

  return `M${start.x},${start.y} C ${start.x + curveX},${start.y + curveY} ${
    end.x - curveX
  },${end.y - curveY} ${end.x},${end.y}`;
};

export const generateRightAnglePath = (startPos, endPos) => {
  const width = Math.abs(startPos.x - endPos.x);
  const height = Math.abs(startPos.y - endPos.y);
  const leftToRight = startPos.x < endPos.x;
  const topToBottom = startPos.y < endPos.y;
  const isHorizontal = width > height;

  let start;
  let end;
  if (isHorizontal) {
    start = leftToRight ? startPos : endPos;
    end = leftToRight ? endPos : startPos;
  } else {
    start = topToBottom ? startPos : endPos;
    end = topToBottom ? endPos : startPos;
  }

  const vertex = isHorizontal ? `${start.x},${end.y}` : `${end.x},${start.y}`;

  return `M${start.x},${start.y} L ${vertex} ${end.x},${end.y}`;
};

const finder = new PF.JumpPointFinder({
  heuristic: PF.Heuristic.manhattan,
});

const setWalkableAtPorts = (start, end, grid) => {
  [start, end].forEach((point) => {
    if (["input", "top"].includes(point.port.type)) {
      for (
        let i = point.pos.y;
        i >= Math.max(point.pos.y - MATRIX_PADDING, 0);
        i--
      ) {
        grid.setWalkableAt(point.pos.x, i, true);
      }
    } else if (["output", "bottom"].includes(point.port.type)) {
      for (
        let i = point.pos.y;
        i <= Math.min(point.pos.y + MATRIX_PADDING, grid.height);
        i++
      ) {
        grid.setWalkableAt(point.pos.x, i, true);
      }
    } else if (["right"].includes(point.port.type)) {
      for (
        let i = point.pos.x;
        i <= Math.max(point.pos.x + MATRIX_PADDING, grid.width);
        i++
      ) {
        grid.setWalkableAt(i, point.pos.y, true);
      }
    } else if (["left"].includes(point.port.type)) {
      for (
        let i = point.pos.x;
        i >= Math.max(point.pos.x - MATRIX_PADDING, 0);
        i--
      ) {
        grid.setWalkableAt(i, point.pos.y, true);
      }
    }
  });
};

const toSvgPath = (points, grid) => {
  const [first, ...rest] = points;
  let d = `M${first[0]} ${first[1]}`;
  rest.forEach(([x, y]) => {
    d += ` L${x} ${y}`;
  });
  return d;
};

const toPrettySvgPath = (points, grid) => {
  let scope = new paper.PaperScope();
  scope.setup([grid.width * 5, grid.height * 5]);
  let path = new scope.Path({
    segments: points,
    strokeColor: "black",
    closed: false,
    fullySelected: true,
  });

  path.smooth();
  path.simplify();

  const svg = path.exportSVG();

  path.remove();
  scope.remove();
  scope.clear();
  scope = null;

  return svg.getAttribute("d");
};

export const generateSmartPath = (
  matrix,
  startPos,
  endPos,
  fromPort,
  toPort,
  config
) => {
  const grid = new PF.Grid(matrix);

  const startPosScaled = {
    x: Math.ceil(startPos.x / MATRIX_PADDING),
    y: Math.ceil(startPos.y / MATRIX_PADDING),
  };
  const endPosScaled = {
    x: Math.ceil(endPos.x / MATRIX_PADDING),
    y: Math.ceil(endPos.y / MATRIX_PADDING),
  };

  try {
    setWalkableAtPorts(
      { pos: startPosScaled, port: fromPort },
      { pos: endPosScaled, port: toPort },
      grid
    );

    const path = finder.findPath(
      startPosScaled.x,
      startPosScaled.y,
      endPosScaled.x,
      endPosScaled.y,
      grid
    );

    if (!path.length) {
      console.log("ERROR: path empty");
      // console.log(startPosScaled, endPosScaled);
    }

    let resultPath = path;
    resultPath = PF.Util.compressPath(path);
    resultPath = PF.Util.smoothenPath(grid, resultPath);

    const points = resultPath.map((item) => {
      const [x, y] = item;
      return [x * 5, y * 5];
    });

    if (!config.taxiPath) {
      if (config.normalizedPath) {
        return toPrettySvgPath(points, grid);
      } else {
        return toSvgPath(points, grid);
      }
    } else {
      return generateRightAnglePath(startPos, endPos);
    }
  } catch (e) {
    console.log("ERROR: why? draw default");
    return generateCurvePath(startPos, endPos);
  }
  // return toSVGPath(points);
};
