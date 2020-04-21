declare namespace SidebarScssModule {
  export interface ISidebarScss {
    sidebar: string;
  }
}

declare const SidebarScssModule: SidebarScssModule.ISidebarScss & {
  locals: SidebarScssModule.ISidebarScss;
};

export default SidebarScssModule;
