// eco templates.
interface EcoTemplate {
    (context?: any): string;
}

// imjs.
interface Promise {}
declare module intermine {
    export class List {
        authorized: bool;
        dateCreated: string;
        description: string;
        folders: any[];
        name: string;
        size: number;
        status: string;
        tags: string[];
        timestamp: number;
        title: string;
        type: string;
    }

    interface InterMineServiceListsCallback {
        (lists: List[]): void;
    }

    export class Service {
        constructor (opts: {
            root: string
            token: string
            errorHandler(): void
        });
        fetchLists(cb: (lists: intermine.List[]) => void ): Promise;
    }
}

// async.
interface AsyncResultsCallback {
    (err: string, results?: any): void;
}
interface Async {
    waterfall(tasks: any[], cb: AsyncResultsCallback): void;
}
declare var async: Async;

// jQuery.
interface JQuery {
    html(JQuery): JQuery
    find(selector: string): JQuery;
}
interface JQueryStatic {
    (): JQuery;
    (element: HTMLElement): JQuery;
    (selector: string, context?: any): JQuery;
}
declare var jQuery: JQueryStatic;
declare var $: JQueryStatic;

// Underscore.
declare var _: any;

// Backbone 1.0.0.
declare module Backbone {
    export class Model {
        constructor (attr?, opts?);
        get(name: string): any;
        set(name: string, val: any): void;
        set(obj: any): void;
        escape(attr: string): string;
        has(attr: string): bool;
        unset(attr: string, opts?: any): void;
        clear(opts?: any): void;
        id: string;
        idAttribute: string;
        cid: string;
        attributes: any;
        changed: any;
        defaults: any;
        toJSON(): any;
        sync(method: string, model: Model, opts?: any): void;
        fetch(opts?: any): void;
        save(attrs?: any, opts?: any): void;
        destroy(opts?: any): void;
        validate(attrs: any, opts: any);
        validationError: any;
        isValid(): bool;
        url(): string;
        urlRoot: any;
        parse(response:any, opts: any): any;
        clone(): Model;
        isNew(): bool;
        hasChanged(attr?: string): bool;
        changedAttributes(attrs?: any): any;
        previous(attr: string): any;
        previousAttributes(): any;
    }
    export class Collection {
        constructor (models?, opts?);
        model: any;
        models(): any[];
        toJSON(): any;
        sync(method: string, collection: any, opts?: any): void;
        add(models: any, opts?: any): void;
        remove(models: any, opts?: any): void;
        reset(models?: any, opts?: any): void;
        set(models: any, opts?: any): void;
        get(id: string): Model;
        at(index: number): Model;
        push(model: Model, opts?: any): void;
        pop(opts?: any): Model;
        unshift(model: Model, opts?: any): Model;
        shift(opts?: any): Model;
        slice(begin: number, end: number): Model[];
        length: number;
        comparator: any;
        sort(opts?: any): void;
        pluck(attr): any[];
        where(attrs): Model[];
        findWhere(attrs): Model;
        url: any;
        parse(response:any, opts: any): any;
        clone(): Collection;
        fetch(opts?: any): void;
        create(attrs: any, opts?: any): Collection;
    }
    export class View {
        constructor (opts?);
        el: HTMLElement;
        $el: any;
        setElement(element: HTMLElement, delegate?: bool): void;
        attributes: any;
        $(selector: string): any;
        render(): View;
        remove(): void;
        delegateEvents(events?: any): void;
        undelegateEvent(): void;
        tagName: string;
    }
}