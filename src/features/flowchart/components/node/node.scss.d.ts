declare namespace NodeScssModule {
  export interface INodeScss {
    node: string;
  }
}

declare const NodeScssModule: NodeScssModule.INodeScss & {
  locals: NodeScssModule.INodeScss;
};

export default NodeScssModule;
