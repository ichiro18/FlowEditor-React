declare namespace PortScssModule {
  export interface IPortScss {
    port: string;
    port__icon: string;
  }
}

declare const PortScssModule: PortScssModule.IPortScss & {
  locals: PortScssModule.IPortScss;
};

export default PortScssModule;
