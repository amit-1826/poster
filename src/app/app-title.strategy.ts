import { Injectable } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { RouterStateSnapshot, TitleStrategy } from "@angular/router";

@Injectable({ providedIn: 'root' })
export class AppTitleStrategy extends TitleStrategy {

    private readonly appName = 'Poster App';

    constructor(private titleService: Title) {
        super();
    }

    override updateTitle(snapshot: RouterStateSnapshot): void {
        const resolvedTitle = this.buildTitle(snapshot);

        if (resolvedTitle) {
            this.titleService.setTitle(`${resolvedTitle} | ${this.appName}`);
        } else {
            this.titleService.setTitle(this.appName);
        }
    }
}