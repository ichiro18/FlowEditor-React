declare namespace LinkScssModule {
  export interface ILinkScss {
    link: string;
    link__connector: string;
    link__path: string;
    "link__path--selected": string;
    link__marker: string;
  }
}

declare const LinkScssModule: LinkScssModule.ILinkScss & {
  locals: LinkScssModule.ILinkScss;
};

export default LinkScssModule;
