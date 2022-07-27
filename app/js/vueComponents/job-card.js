VueApp.component('job-card', {
    emits: [],
    props: {
        job: {
            type: Object,
            required: true, 
        }
    },
    template: 
    /* html */ 
    `
    <div class="jobCard">
        <div class="jobContentWrapper">
            <img :src="logo" :alt="logoAlt">
            <div class="info">
                <div class="company">
                    <p class="companyName">{{company}}</p>
                    <p class="new" v-show="isNew">NEW!</p>
                    <p class="featured" v-show="isFeatured">FEATURED</p>
                </div>
                <h1 class="position">{{position}}</h1>
                <p class="jobAttr">
                    {{postDate}}&nbsp;&nbsp;&nbsp;
                    &bull;
                    &nbsp;&nbsp;&nbsp;{{contract}}&nbsp;&nbsp;&nbsp;
                    &bull;
                    &nbsp;&nbsp;&nbsp;{{location}}</p>

            </div>

            <div class="attributes">
                <p class="attrTag">{{role}}</p>
                <p class="attrTag">{{level}}</p>
                <p class="attrTag" v-for="(lang, index) in langs" :key="index">{{lang}}</p>
                <p class="attrTag" v-for="(tool, index) in tools" :key="index">{{tool}}</p>
            </div>
        </div>

    </div>
    `,
    data: function() {
        return {
            company: this.job.company,
            logo: this.job.logo,
            isNew: this.job.new,
            isFeatured: this.job.featured,
            position: this.job.position,
            role: this.job.role,
            level: this.job.level,
            postDate: this.job.postedAt,
            contract: this.job.contract,
            location: this.job.location,
            langs: this.job.languages,
            tools: this.job.tools

        }
    },
    computed: {
        logoAlt: function() {
            return "icon-"+this.company+"."; 
        }
    },
    watch: {

    },
    methods: {

    }
    
})