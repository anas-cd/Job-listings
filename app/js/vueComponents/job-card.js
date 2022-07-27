VueApp.component('job-card', {
    emits: ['add-filter'],
    props: {
        job: {
            type: Object,
            required: true
        },
        filter: {
            type: Array,
            required: true
        }
    },
    template: 
    /* html */ 
    `
    <div class="jobCard" :class="{jobCard__featured: isFeatured}" v-show="isFiltered()">
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
                <p class="attrTag" @click="addFilter(role)">{{role}}</p>
                <p class="attrTag" @click="addFilter(level)">{{level}}</p>
                <p class="attrTag" v-for="(lang, index) in langs" :key="index" @click="addFilter(lang)">{{lang}}</p>
                <p class="attrTag" v-for="(tool, index) in tools" :key="index" @click="addFilter(tool)">{{tool}}</p>
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
            tools: this.job.tools, 
            allTags: []

        }
    },
    mounted: function(){
        this.initArray();
    },
    computed: {
        logoAlt: function() {
            return "icon-"+this.company+".";
        }
    },
    watch: {

    },
    methods: {
        addFilter(tag) { 
            this.$emit('add-filter',tag);
        },
        isFiltered() {
            
            if (this.filter.length === 0) {
                return true;

            }else if ( this.filter.every(tag => {return this.allTags.includes(tag)}) ) {
                return true;

            }else return false;
                
        }, 
        initArray() {
            this.allTags.push(this.role, this.level); 
            this.allTags = [...this.allTags, ...this.langs, ...this.tools];
        } 
    }
    
}) 