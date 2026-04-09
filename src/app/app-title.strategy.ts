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

        const snapshotRoot = snapshot.root;
        // Note: not recommended in a real app, but for demo purposes it's fine
        const postTitle = snapshotRoot.data?.['postTitle'];

        if (postTitle) {
            this.titleService.setTitle(`${postTitle} | ${this.appName}`);
        } else if (resolvedTitle) {
            this.titleService.setTitle(`${resolvedTitle} | ${this.appName}`);
        } else {
            this.titleService.setTitle(this.appName);
        }
    }

    // This is a helper method to get the deepest data value for a given key in the route snapshot
    // Not recommended - Use title service in the post detail component instead, but for demo purposes it's fine
    private getDeepestData(snapshot: any, key: string): string | null {
        let current = snapshot;
        let value = null;
        while (current) {
            if (current.data?.[key]) value = current.data[key];
            current = current.firstChild;
        }
        return value;
    }
}