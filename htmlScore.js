const fetch = require("cross-fetch");

const getRawData = (URL) => {
    return fetch(URL)
       .then((response) => response.text())
       .then((data) => {
          return data;
       });
 };

const myFunctions={
    scoreHTML: (str, keyword) =>{
        let rawData = str;
        let ps=[];
        let p2s=[];
        let as=[];
        let bs=[];
        let b2s=[];
        let strongs=[];
        let strong2s=[];
        let is=[];
        let i2s=[];
        let ems=[];
        let em2s=[]
        let h3s=[];
        let h32s=[];
        let h4s=[];
        let h42s=[];
        let h5s=[];
        let h52s=[];
        let h2s=[];
        let h22s=[];
        let h1s=[];
        let h12s=[];
        let ts=[];
        let t2s=[];
        for(let x=6; x<rawData.length-6; x++){
            if(rawData[x-1]=="<"){
                if(rawData[x]=="p")
                    ps.push(x+2);
                if(rawData[x]=="b" && rawData[x+1]==">")
                    bs.push(x+2);
                if(rawData[x]=="i" && rawData[x+1]==">")
                    is.push(x+2);
                if(rawData[x]=="a")
                    as.push(x+2);
                if(rawData[x]=="e" && rawData[x+1]=="m" && rawData[x+2]==">")
                    ems.push(x+3)
                if(rawData[x]=="h" && rawData[x+1]=="2" && rawData[x+2]==">")
                    h2s.push(x+3)
                if(rawData[x]=="h" && rawData[x+1]=="3" && rawData[x+2]==">")
                    h3s.push(x+3)
                if(rawData[x]=="h" && rawData[x+1]=="4" && rawData[x+2]==">")
                    h4s.push(x+3)
                if(rawData[x]=="h" && rawData[x+1]=="5" && rawData[x+2]==">")
                    h5s.push(x+3)
                if(rawData[x]=="h" && rawData[x+1]=="1" && rawData[x+2]==">")
                    h1s.push(x+3)
                if(rawData[x]=="s" && rawData[x+1]=="t" && rawData[x+2]=="r" && rawData[x+3]=="o" && rawData[x+4]=="n" && rawData[x+5]=="g")
                    strongs.push(x+7);
                if(rawData[x]=="t" && rawData[x+1]=="i" && rawData[x+2]=="t" && rawData[x+3]=="l" && rawData[x+4]=="e")
                    ts.push(x+6);                
                if(rawData[x]=="/")
                {
                    if(rawData[x+1]=="p" && rawData[x+2]==">")
                       p2s.push(x-1)
                    if(rawData[x+1]=="b" && rawData[x+2]==">")
                       b2s.push(x-1)
                    if(rawData[x+1]=="i" && rawData[x+2]==">")
                       i2s.push(x-1)
                    if(rawData[x+1]=="e" && rawData[x+2]=="m")
                       em2s.push(x-1)
                    if(rawData[x+1]=="h" && rawData[x+2]=="2")
                        h22s.push(x-1)
                    if(rawData[x+1]=="h" && rawData[x+2]=="3")
                        h32s.push(x-1)
                    if(rawData[x+1]=="h" && rawData[x+2]=="4")
                        h42s.push(x-1)
                    if(rawData[x+1]=="h" && rawData[x+2]=="5")
                        h52s.push(x-1)
                    if(rawData[x+1]=="h" && rawData[x+2]=="1")
                        h12s.push(x-1)                    
                    if(rawData[x+1]=="s" && rawData[x+2]=="t" && rawData[x+3]=="r" && rawData[x+4]=="o" && rawData[x+5]=="n" && rawData[x+6]=="g" && rawData[x+7]==">")
                        strong2s.push(x-1);
                    if(rawData[x+1]=="t" && rawData[x+2]=="i" && rawData[x+3]=="t" && rawData[x+4]=="l" && rawData[x+5]=="e")
                        t2s.push(x-1);
                }
            }
        }

        let score=0;
        // console.log(ps.length+" "+p2s.length)
        for(let x=0; x<ps.length; x++){
            let p=rawData.substring(ps[x], p2s[x]);
            // console.log(p)
            if(p.includes(keyword))
                score+=1;
        }
        console.log("p score: "+score)

        // console.log("as:\n"+as)
        // console.log(as.length)
        for(let x=0; x<as.length; x++){
            let current=as[x];
            let notFound=true;
            while(notFound)
            {
                if(rawData[current]==">")
                    notFound=false
                else
                    current++;
            }
            let p=rawData.substring(as[x], current)
            if(p.includes(keyword)){
                score+=2
            }
        }
        console.log("link score: "+score)

        // console.log(bs.length+" "+b2s.length)
        for(let x=0; x<bs.length; x++){
            let p=rawData.substring(bs[x], b2s[x]);
            // console.log(p)
            if(p.includes(keyword))
                score+=1;
        }
        console.log("b score: "+score)

        // console.log(strongs.length+" "+strong2s.length)
        for(let x=0; x<strongs.length; x++){
            let p=rawData.substring(strongs[x], strong2s[x]);
            if(p.includes(keyword))
                score+=2;
        }
        console.log("strong score: "+score)

        // console.log(is.length+" "+i2s.length)
        for(let x=0; x<is.length; x++){
            let p=rawData.substring(is[x], i2s[x]);
            // console.log(p)
            if(p.includes(keyword))
                score+=2;
        }
        console.log("i score: "+score)

        // console.log(ems.length+" "+em2s.length)
        for(let x=0; x<ems.length; x++){
            let p=rawData.substring(ems[x], em2s[x]);
            if(p.includes(keyword))
                score+=2;
        }
        console.log("em score: "+score)
        
        // console.log(h2s.length+" "+h22s.length)
        for(let x=0; x<h2s.length; x++){
            let p=rawData.substring(h2s[x], h22s[x]);
            if(p.includes(keyword))
                score+=4;
        }
        console.log("h2 score: "+score)
        
        // console.log(h3s.length+" "+h3s.length)
        for(let x=0; x<h3s.length; x++){
            let p=rawData.substring(h3s[x], h32s[x]);
            if(p.includes(keyword))
                score+=3;
        }
        console.log("h3 score: "+score)
        
        // console.log(h4s.length+" "+h42s.length)
        for(let x=0; x<h4s.length; x++){
            let p=rawData.substring(h4s[x], h42s[x]);
            if(p.includes(keyword))
                score+=3;
        }
        console.log("h4 score: "+score)
        
        // console.log(h5s.length+" "+h52s.length)
        for(let x=0; x<h5s.length; x++){
            let p=rawData.substring(h5s[x], h52s[x]);
            if(p.includes(keyword))
                score+=3;
        }
        console.log("h5 score: "+score)
        
        // console.log(h1s.length+" "+h12s.length)
        for(let x=0; x<h1s.length; x++){
            let p=rawData.substring(h1s[x], h12s[x]);
            if(p.includes(keyword))
                score+=5;
        }
        console.log("h1 score: "+score)

        // console.log(ts.length+" "+t2s.length)
        for(let x=0; x<ts.length; x++){
            let p=rawData.substring(ts[x], t2s[x]);
            console.log(p)
            if(p.includes(keyword))
                score+=10;
        }
        console.log("title score: "+score)
        console.log(keyword+" Final Score: "+score+"\n")
    },

    scoreRemote: (url, keyword) =>{
        let URL = url;
        const getScore = async () => {
            let rawData = String(await getRawData(URL));
            let ps=[];
            let p2s=[];
            let as=[];
            let bs=[];
            let b2s=[];
            let strongs=[];
            let strong2s=[];
            let is=[];
            let i2s=[];
            let ems=[];
            let em2s=[]
            let h3s=[];
            let h32s=[];
            let h4s=[];
            let h42s=[];
            let h5s=[];
            let h52s=[];
            let h2s=[];
            let h22s=[];
            let h1s=[];
            let h12s=[];
            let ts=[];
            let t2s=[];
            
            for(let x=6; x<rawData.length-6; x++){
                if(rawData[x-1]=="<"){
                    if(rawData[x]=="p")
                        ps.push(x+2);
                    if(rawData[x]=="b" && rawData[x+1]==">")
                        bs.push(x+2);
                    if(rawData[x]=="i" && rawData[x+1]==">")
                        is.push(x+2);
                    if(rawData[x]=="a")
                        as.push(x+2);
                    if(rawData[x]=="e" && rawData[x+1]=="m" && rawData[x+2]==">")
                        ems.push(x+3)
                    if(rawData[x]=="h" && rawData[x+1]=="2" && rawData[x+2]==">")
                        h2s.push(x+3)
                    if(rawData[x]=="h" && rawData[x+1]=="3" && rawData[x+2]==">")
                        h3s.push(x+3)
                    if(rawData[x]=="h" && rawData[x+1]=="4" && rawData[x+2]==">")
                        h4s.push(x+3)
                    if(rawData[x]=="h" && rawData[x+1]=="5" && rawData[x+2]==">")
                        h5s.push(x+3)
                    if(rawData[x]=="h" && rawData[x+1]=="1" && rawData[x+2]==">")
                        h1s.push(x+3)
                    if(rawData[x]=="s" && rawData[x+1]=="t" && rawData[x+2]=="r" && rawData[x+3]=="o" && rawData[x+4]=="n" && rawData[x+5]=="g")
                        strongs.push(x+7);
                    if(rawData[x]=="t" && rawData[x+1]=="i" && rawData[x+2]=="t" && rawData[x+3]=="l" && rawData[x+4]=="e")
                        ts.push(x+6);                
                    if(rawData[x]=="/")
                    {
                        if(rawData[x+1]=="p" && rawData[x+2]==">")
                           p2s.push(x-1)
                        if(rawData[x+1]=="b" && rawData[x+2]==">")
                           b2s.push(x-1)
                        if(rawData[x+1]=="i" && rawData[x+2]==">")
                           i2s.push(x-1)
                        if(rawData[x+1]=="e" && rawData[x+2]=="m")
                           em2s.push(x-1)
                        if(rawData[x+1]=="h" && rawData[x+2]=="2")
                            h22s.push(x-1)
                        if(rawData[x+1]=="h" && rawData[x+2]=="3")
                            h32s.push(x-1)
                        if(rawData[x+1]=="h" && rawData[x+2]=="4")
                            h42s.push(x-1)
                        if(rawData[x+1]=="h" && rawData[x+2]=="5")
                            h52s.push(x-1)
                        if(rawData[x+1]=="h" && rawData[x+2]=="1")
                            h12s.push(x-1)                    
                        if(rawData[x+1]=="s" && rawData[x+2]=="t" && rawData[x+3]=="r" && rawData[x+4]=="o" && rawData[x+5]=="n" && rawData[x+6]=="g" && rawData[x+7]==">")
                            strong2s.push(x-1);
                        if(rawData[x+1]=="t" && rawData[x+2]=="i" && rawData[x+3]=="t" && rawData[x+4]=="l" && rawData[x+5]=="e")
                            t2s.push(x-1);
                    }
                }
            }

            let score=0;
            // console.log(ps.length+" "+p2s.length)
            for(let x=0; x<ps.length; x++){
                let p=rawData.substring(ps[x], p2s[x]);
                if(p.includes(keyword))
                {
                    // console.log(p)
                    score+=1;
                }
            }
            console.log("p score: "+score)
            
            for(element of as)
            {
                let current=element;
                let notFound=true;
                while(notFound)
                {
                    if(rawData[current]==">")
                        notFound=false
                    else
                        current++;
                }
                let p=rawData.substring(element, current)
                if(p.includes(keyword)){
                    score+=2
                }
            }
            console.log("link score: "+score)

            for(let x=0; x<bs.length; x++){
                let p=rawData.substring(bs[x], b2s[x]);
                // console.log(p)
                if(p.includes(keyword))
                    score+=1;
            }
            console.log("b score: "+score)

            for(let x=0; x<strongs.length; x++){
                let p=rawData.substring(strongs[x], strong2s[x]);
                if(p.includes(keyword))
                    score+=2;
            }
            console.log("strong score: "+score)

            for(let x=0; x<is.length; x++){
                let p=rawData.substring(is[x], i2s[x]);
                // console.log(p)
                if(p.includes(keyword))
                {
                    // console.log(p)
                    score+=2
                }
            }
            console.log("i score: "+score)

            for(let x=0; x<ems.length; x++){
                let p=rawData.substring(ems[x], em2s[x]);
                if(p.includes(keyword))
                    score+=2;
            }
            console.log("em score: "+score)
            
            for(let x=0; x<h2s.length; x++){
                let p=rawData.substring(h2s[x], h22s[x]);
                if(p.includes(keyword))
                    score+=4;
            }
            console.log("h2 score: "+score)
            
            for(let x=0; x<h3s.length; x++){
                let p=rawData.substring(h3s[x], h32s[x]);
                if(p.includes(keyword))
                    score+=3;
            }
            console.log("h3 score: "+score)
            
            for(let x=0; x<h4s.length; x++){
                let p=rawData.substring(h4s[x], h42s[x]);
                if(p.includes(keyword))
                    score+=3;
            }
            console.log("h4 score: "+score)
            
            for(let x=0; x<h5s.length; x++){
                let p=rawData.substring(h5s[x], h52s[x]);
                if(p.includes(keyword))
                    score+=3;
            }
            console.log("h5 score: "+score)
            
            for(let x=0; x<h1s.length; x++){
                let p=rawData.substring(h1s[x], h12s[x]);
                if(p.includes(keyword))
                    score+=5;
            }
            console.log("h1 score: "+score)

            for(let x=0; x<ts.length; x++){
                let p=rawData.substring(ts[x], t2s[x]);
                if(p.includes(keyword))
                    score+=10;
            }
            console.log("title score: "+score)
            console.log(keyword+" Final Score: "+score+"\n")
        }
        getScore()
    }
}
module.exports=myFunctions;
