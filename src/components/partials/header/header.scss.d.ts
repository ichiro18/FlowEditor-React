declare namespace HeaderScssModule {
  export interface IHeaderScss {
    header: string;
    brand: string;
    brand__logo: string;
    brand__title: string;
  }
}

declare const HeaderScssModule: HeaderScssModule.IHeaderScss & {
  locals: HeaderScssModule.IHeaderScss;
};

export default HeaderScssModule;
