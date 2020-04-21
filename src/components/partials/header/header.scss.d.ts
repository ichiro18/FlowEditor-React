declare namespace HeaderScssModule {
  export interface IHeaderScss {
    header: string;
  }
}

declare const HeaderScssModule: HeaderScssModule.IHeaderScss & {
  locals: HeaderScssModule.IHeaderScss;
};

export default HeaderScssModule;
