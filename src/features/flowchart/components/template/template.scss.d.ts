declare namespace TemplateScssModule {
  export interface ITemplateScss {
    template: string;
  }
}

declare const TemplateScssModule: TemplateScssModule.ITemplateScss & {
  locals: TemplateScssModule.ITemplateScss;
};

export default TemplateScssModule;
