            //<![CDATA[
            $(document).ready(function(){
                
                new jPlayerPlaylist({
                    jPlayer: "#tr-player",
                    cssSelectorAncestor: "#tr-player-wrapper"
                }, [
                    {
                        title:"Little Bad Girl",
                        artist:"Gibson",
                        mp3:"http://sample.vodobox.net/skate_phantom_flex_4k/skate_phantom_flex_4k.m3u8",
                        oga:"http://sample.vodobox.net/skate_phantom_flex_4k/skate_phantom_flex_4k.m3u8"
                    },
                    {
                        title:"Stirring of a Fool",
                        artist:"Putnam",
                        mp3:"http://www.jplayer.org/audio/mp3/Miaow-08-Stirring-of-a-fool.mp3",
                        oga:"http://www.jplayer.org/audio/ogg/Miaow-08-Stirring-of-a-fool.ogg"
                    },
                    {
                        title:"Your Face",
                        artist:"Cetinkaya",                        
                        mp3:"http://www.jplayer.org/audio/mp3/TSP-05-Your_face.mp3",
                        oga:"http://www.jplayer.org/audio/ogg/TSP-05-Your_face.ogg"
                    },
                    {
                        title:"Cyber Sonnet",
                        artist:"Thomas",                        
                        mp3:"http://www.jplayer.org/audio/mp3/TSP-07-Cybersonnet.mp3",
                        oga:"http://www.jplayer.org/audio/ogg/TSP-07-Cybersonnet.ogg"
                    },
                    {
                        title:"Tempered Song",
                        artist:"Gibson",                        
                        mp3:"http://www.jplayer.org/audio/mp3/Miaow-01-Tempered-song.mp3",
                        oga:"http://www.jplayer.org/audio/ogg/Miaow-01-Tempered-song.ogg"
                    },
                    {
                        title:"Hidden",
                        artist:"shvili",                        
                        mp3:"http://www.jplayer.org/audio/mp3/Miaow-02-Hidden.mp3",
                        oga:"http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg"
                    }
                ], {
                    swfPath: "../../dist/jplayer",
                    supplied: "oga, mp3",
                    wmode: "window",
                    useStateClassSkin: true,
                    autoBlur: false,
                    smoothPlayBar: true,
                    keyEnabled: false,
                    remainingDuration: true,
                });
            });            
            //]]>