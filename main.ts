class YouTube{
videotitle:string;
videoId:number;
url:string;
views:number;
likes:number;
dislikes:number;
share:string[];
addto:string[];
category:string;
License:string;
VideoDescription:string;
comments:object[];
recommended:object[];
channelList:object[];
channnelName:string;
channelId:number;
playList:object[];
playlistId:number;
recentlyuploaded:object[]
   constructor( videotitle:string,videoId:number,url:string,views:number, likes:number, dislikes:number, share:string[],addto:string[],category:string,License:string,VideoDescription:string,comments:object[],recommended:object[],
                channelList:object[], channnelName:string,channelId:number,playList:object[], playlistId:number,recentlyuploaded:object[])
                {
                    this.videotitle=videotitle;
this.videoId=videoId;
this.url=url;
this.views=views;
this.likes=likes;
this.dislikes=dislikes;
this.share=share;
this.addto=addto;
this. category=category;
this.License=License;
this.VideoDescription=VideoDescription;
this.comments=comments;
this.recommended=recommended;
this.channelList=channelList;
this.channnelName=channnelName;
this.channelId=channelId;
this.playList=playList;
this.playlistId=playlistId;
this.recentlyuploaded=recentlyuploaded
}//end of constructor

//Getters
getvideotitle=()=>
{
    return this.videotitle
}

getvideoId=()=>
{
    return this.videoId
}
geturl=()=>
{
    return this.url
}
getviews=()=>
{
    return this.views
}
getlikes=()=>
{
    return this.likes
}
getdislikes=()=>
{
    return this.dislikes
}
getshare=()=>
{
    return this.share
}
getaddto=()=>
{
    return this.addto
}
getcategory=()=>
{
    return this.category
}
getLicense=()=>
{
    return this.License
}
getVideoDescription=()=>
{
    return this.VideoDescription
}
getcomments=()=>
{
   return this.comments
}
getrecommended=()=>
{
    return this.recommended
}
getchannelList=()=>
{
    return this.channelList
}
getchannnelName=()=>
{
    return this.channnelName
}
getchannelId=()=>
{
    return this.channelId
}
getplayList=()=>
{
    return this.playList
}
getplaylistId=()=>
{
    return this.playlistId
}
getrecentlyuploaded=()=>
{
    return this.recentlyuploaded
}
//methods
getElementId=()=>
{
    console.log("Display Not Found");
}
getVideoDetails=()=>
{
    console.log("Details Not Found")
}
 // methods
 addView = () => {
    this.views++
    console.log("added a view")
}
addLike = () => {
    this.likes++
    console.log("added a like")
}
addDislike = () => {
    this.dislikes++
    console.log("added a dislike")
}
addComment = (Comment:object) => {
    this.comments.push(Comment)
    console.log("added a comment")
} // method ends

}//end of class

//Input for YouTube Class

let childrenVideo = new YouTube(
"Sang Sang Bholanath Marathi kids song, balgeet by Jingle Toons",//Video Title
12345678,//VideoId
"https://www.youtube.com/watch?v=2EVev7a5B2M",//Video Url
4680592,//views
7.7,//likes
1.0,//dislikes
["https://youtube/2EVev7a5B2M","https://youtube/2EVev7a5B2M","https://youtube/2EVev7a5B2M"],//share
["Want to watch this again later?"," Sign in to add this video to a playlist."],//addto
"Film & Animation",//Category
"Standard YouTube License",//License
"Jingle Toons presents Sang Sang Bholanath - one of the most popular Marathi kids song (balgeet) in cartoon animation format. In this song, the bull (named Bholanath) is able to tell whether it will rain or not... and kids ask the bull if it will rain and they if they will get off for school.",//Video Description
[   //comments
        {   
            name: "Deepali",
            comment: "Very Nice"
        },
        {   name : "Amol",
            comment : "Its too good"
        },
        {   name : "Amodi",
            comment : "Nice One"
        }
],
[
    {
        videotitle: "Sheptiwalya Pranyanchi Sabha ",
        VideoId:123
    },
    {
        videotitle: "Sasa To Sasa",
        videoId:456
    }
],//recommended
[
    {
        ChannelList: "Jingle Toons"
    },
    {
        channelList:" Tita kids tv - Learn for kids",
    }
],
"Tita kids tv - Learn for kids",//Channel Name
789456,//channel Id
[
    {
        videotitle:"Marathi Balgeet Collection 2016 ",
        VideoId:45678
    },
    {
        videotitle:"Konas Thauk Kassa",
        videoId:9876
    },
    {
        videotitle:"Chandob  Chandoba",
        videoId:1234
    }
],//Play List
160989,//Playlist Id
[
    {
        videoId:1,
        videotitle:"Dada mala Ek Vahini Aan",
        url:"https://www.youtube.com/watch?v=BMidTM5LRe4"
    },
    {
        videoId:2,
        videotitle:"ye re ye re Pawsa",
        url:"https://www.youtube.com/watch",
    },
    {
        videoId:3,
        videotitle:"Bhitra sasa",
        url:"https://www.youtube.com/watch?v=BMidTM5LRe4"
    }
]//recommended
)//input ends

//Output
console.log("Videotitle: " , childrenVideo.getvideotitle())
console.log("Video Id: ",childrenVideo.getvideoId())
console.log("Url: ",childrenVideo.geturl())
console.log("Views: ",childrenVideo.getviews())
console.log("Likes: ", childrenVideo.getlikes())
console.log("Dislikes: ",childrenVideo.getdislikes())
console.log("Share: ",childrenVideo.getshare())
console.log("Addto: ",childrenVideo.getaddto())
console.log("License: ",childrenVideo.getLicense())
console.log("Video Description",childrenVideo.getVideoDescription())
console.log("Comments: ", childrenVideo.getcomments())
console.log("Recommended: ",childrenVideo.getrecommended())
console.log("Channel List: ",childrenVideo.getchannelList())
console.log("Channel Name: ",childrenVideo.getchannnelName())
console.log("Channel Id: ",childrenVideo.getchannelId())
console.log("PlayList: ", childrenVideo.getplayList())
console.log("Play List Id:",childrenVideo.getplaylistId())
console.log("Recenlty Uploaded: ", childrenVideo.getrecentlyuploaded())




