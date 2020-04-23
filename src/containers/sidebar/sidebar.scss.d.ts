declare namespace SidebarScssModule {
  export interface ISidebarScss {
    sidebar: string;
    sidebar__title: string;
  }
}

declare const SidebarScssModule: SidebarScssModule.ISidebarScss & {
  locals: SidebarScssModule.ISidebarScss;
};

export default SidebarScssModule;
