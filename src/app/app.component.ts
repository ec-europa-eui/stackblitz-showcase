import { Component, OnDestroy, VERSION } from '@angular/core';
import { Store } from '@ngrx/store';
import { getUserState, UserState } from '@eui/core';
import { Observable, Subscription } from 'rxjs';
import { I18nService } from '@eui/core';
import { LANG_PARAM_KEY } from '@eui/core';
import { HttpClient } from '@angular/common/http';
import { LogService, Logger, LogLevel } from '@eui/core';



@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent implements OnDestroy {
    userInfos: UserState;
    // Observe state changes
    userState: Observable<UserState>;
    // an array to keep all subscriptions and easily unsubscribe
    subs: Subscription[] = [];
    private logger: Logger
    sidebarItems = [
        { label: 'Home', url: 'screen/home', iconClass: 'eui-icon-home' },
    ];
    notificationItems = [
        { label: 'Title label 1', subLabel: 'Subtitle label' },
        { label: 'Title label 2', subLabel: 'Subtitle label' },
        { label: 'Title label 3', subLabel: 'Subtitle label' },
        { label: 'Title label 4', subLabel: 'Subtitle label' },
    ];
    constructor(private store: Store<any>,protected i18nService: I18nService,protected http: HttpClient,locale: LocaleService,
    ) {

    constructor(private store: Store<any>,protected i18nService: I18nService,protected http: HttpClient,
        private log: LogService) {

        this.userState = <any>this.store.select(getUserState);
        this.subs.push(this.userState.subscribe((user: UserState) => {
            this.userInfos = { ...user };
        }));
        this.i18nService.init();
        this.logger = log.getLogger(`'MyApp.MyComponent'`);

    }
    
    }
   
    ngOnDestroy() {
        this.subs.forEach((s: Subscription) => s.unsubscribe());
    }

    getByLang(): Observable<any> {
        return this.http.get('/getByLanguage', { headers: {
            [LANG_PARAM_KEY]: 'lang',
        } })
    }
    ngOnInit() {
        this.doSomething();
        this.doSomethingLogger();

    }

   
    doSomething(): void {
        console.log("log");
        this.userState
            .subscribe((user: UserState) => {
                try {
                    this.log.info('items loaded');
                    console.log(user);
                    this.logger.info('Data loaded:', { data: { time: new Date() } });
                    this.logger.setLevel(LogLevel.DEBUG);



                } catch(e) {
                    this.log.error(e.toString());
                }
            });
    }

    doSomethingLogger(): void {
        this.userState
            .subscribe((data) => {
                try {
                    this.logger.info('items loaded with logger', data);
                } catch(e) {
                    this.logger.error(e.toString());
                }
            });
    }


}
