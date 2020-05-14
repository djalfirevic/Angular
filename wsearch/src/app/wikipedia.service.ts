import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class WikipediaService {
  constructor() {}

  public search(term: string) {
    let url = `https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=${term}`;
  }
}
