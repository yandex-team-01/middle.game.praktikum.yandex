import {
    Namespace,
    Services,
    InitOptions,
    FormatFunction
} from 'i18next';

export interface ReportNamespaces {
    addUsedNamespaces(namespaces: Namespace): void;
    getUsedNamespaces(): string[];
}

declare module 'i18next' {
    interface i18n {
        reportNamespaces: ReportNamespaces;
    }
    interface Formatter {
        init(services: Services, i18nextOptions: InitOptions): void;
        add(name: string, fc: (value, lng: string | undefined, options) => string): void;
        addCached( name: string, fc: (lng: string | undefined, options) => (value) => string): void;
        format: FormatFunction;
    }
}
