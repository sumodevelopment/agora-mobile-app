import { NgModule } from "@angular/core";
import { IonicModule } from "ionic-angular";
import { LoginFooterComponent } from "./login-footer/login-footer.component";
import { SpriteLeagueComponent } from './sprite-league/sprite-league.component';
import { SpriteHeroAvatarComponent } from './sprite-hero-avatar/sprite-hero-avatar.component';
import { LogoutFooterComponent } from './logout-footer/logout-footer.component';
import { HorizontalProgressBarComponent } from './horizontal-progress-bar/horizontal-progress-bar.component';
import { HeroStatItemComponent } from "./hero-stat-item/hero-stat-item.component";
import { AffinityIconComponent } from "./affinity-icon/affinity-icon.component";
import { AbilityListCardComponent } from './ability-list-card/ability-list-card.component';

@NgModule({
    declarations: [
        LoginFooterComponent,
        SpriteLeagueComponent,
        SpriteHeroAvatarComponent,
        LogoutFooterComponent,
        HorizontalProgressBarComponent,
        HeroStatItemComponent,
        AffinityIconComponent,
        AbilityListCardComponent
    ],
    imports: [ IonicModule ],
    exports: [
        LoginFooterComponent,
        SpriteLeagueComponent,
        SpriteHeroAvatarComponent,
        LogoutFooterComponent,
        HorizontalProgressBarComponent,
        HeroStatItemComponent,
        AffinityIconComponent,
        AbilityListCardComponent
    ]
})
export class ComponentsModule {
}