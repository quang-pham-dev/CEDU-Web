import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";



export declare class Page {
  readonly id: string;
  readonly page_name: string;
  readonly page_mode: string;
  readonly date_created: number;
  constructor(init: ModelInit<Page>);
  static copyOf(source: Page, mutator: (draft: MutableModel<Page>) => MutableModel<Page> | void): Page;
}