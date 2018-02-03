import Injectable from "helpers/injectable";

export default class SplashController extends Injectable {
    constructor() {
        super(...arguments);
    }

    $postLink() {
        this.$timeout(() => this.$element.addClass("animate"), 500);

        const lastEl = angular.element(this.$element[0].querySelector("span:nth-of-type(7)"));
        lastEl.on("webkitAnimationEnd", (event) => {
            if (event.animationName === "impact") {
                this.$element.removeClass("animate");
                this.$element.addClass("animate-over");
            }
        });
    }

    again() {
        this.$element.removeClass("animate-over");
        this.$element.addClass("animate");
    }
}

SplashController.$inject = [ "$element", "$timeout", ];