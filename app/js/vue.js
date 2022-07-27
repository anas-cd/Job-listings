const VueApp = Vue.createApp ({
    data: function() {
        return {
            jobsData: [],
            filterList: []
        }
    },
    mounted: function() {
        this.fetcher(); 
    },
    methods: {
        fetcher() {

            if (this.getLocal() === null) {
                console.log("fetching new data");
                fetch('./app/data/data.json')
                .then((res) => res.json()) 
                .then((data) => {
                    this.jobsData=data;
                    this.setLocal(data);  
                })
                .catch((err) => console.log(err)); 
            } else {
                console.log("fetching stored data"); 
                this.jobsData = JSON.parse(this.getLocal());
            }
 
            // //checking 
            console.log("logging jobsData: ")
            // //viewing array target conents
            console.log(JSON.parse(JSON.stringify(this.jobsData)));  
            // //accessing properties from the proxy, you can refer to this vid for more info on how to use proxies in js: https://www.youtube.com/watch?v=hI4AyjNnUzQ
            // console.log(this.jobsData[0].id); 
        },
        setLocal(data) {
            localStorage.setItem("jobsDataJson",JSON.stringify(data));
        },
        getLocal() {
            return localStorage.getItem("jobsDataJson");
        }, 
        filterPush(tag) {
            
            if (!this.filterList.includes(tag)) {
                this.filterList.push(tag);
            }  
        },
        filterDeselect(tag) {
            for (let i = 0; i < this.filterList.length; i++) {
                
                if (this.filterList[i] === tag) { 
                    this.filterList.splice(i,1);
                } 
                
            }
            
        },
        filterClear() { 
            this.filterList.length = 0;
            
        }
    }
})