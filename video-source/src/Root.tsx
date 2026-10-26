import React, {useEffect, useState} from 'react';
import {AbsoluteFill, CanvasImage, Composition, Easing, interpolate, staticFile, useCurrentFrame, useVideoConfig, delayRender, continueRender} from 'remotion';
import {contourPaths} from './mark';

const ease = Easing.bezier(.65, 0, .25, 1);
const clamp = {extrapolateLeft:'clamp' as const, extrapolateRight:'clamp' as const, easing:ease};
export const ContourAwakening: React.FC = () => {
 const frame=useCurrentFrame(); const {fps,width,height}=useVideoConfig(); const t=frame/fps; const portrait=height>width;
 const [fontHandle] = useState(()=>delayRender('Load HazardPath typography'));
 useEffect(()=>{ Promise.all([['HPSerif','serif.woff2','normal'],['HPItalic','italic.woff2','italic'],['HPSans','sans.woff2','normal']].map(async ([name,file,style])=>{const font=new FontFace(name,`url(${staticFile(file)})`,{style});document.fonts.add(await font.load());})).then(()=>continueRender(fontHandle)); },[fontHandle]);
 const unit=width/1600;
 const markScale=portrait?1.5:1.55;
 const gather=interpolate(t,[1.7,4.8],[0,1],clamp);
 const open=interpolate(t,[7,8.5],[0,1],clamp);
 const firstTextOpacity=interpolate(t,[.25,1.2,2.6,3.5],[0,1,1,0],clamp);
 const markOpacity=interpolate(t,[2.5,4.3,6.5,7.8],[0,1,1,0],clamp);
 const markX=portrait?width/2-172*markScale:interpolate(t,[2.4,4.8],[width*.68-172*markScale,width*.5-172*markScale],clamp);
 const markY=portrait?height*.48-192*markScale:height/2-192*markScale;
 const fieldOpacity=interpolate(t,[0,1,5.7,7.8],[.2,.72,.5,0],clamp);
 return <AbsoluteFill style={{background:'#E5EACB',color:'#26332B',overflow:'hidden'}}>
   <AbsoluteFill style={{opacity:interpolate(t,[6,8],[0,1],clamp),clipPath:`inset(0 ${interpolate(t,[6,8],[100,0],clamp)}% 0 0)`}}>
    <CanvasImage src={staticFile('terrain.webp')} style={{width:'100%',height:'100%',objectFit:'cover',objectPosition:portrait?'65% center':'center',scale:interpolate(t,[6,10],[1.08,1],clamp)}} />
   </AbsoluteFill>
   <svg width={width} height={height} style={{position:'absolute',inset:0,opacity:fieldOpacity}}>
    {Array.from({length:26},(_,i)=>{
      const expansion=interpolate(gather,[0,1],[1+i*.075,1+i*.008]);
      const ox=markX - (expansion-1)*172*markScale;
      const oy=markY - (expansion-1)*192*markScale + Math.sin(t*.65+i*.22)*3*(1-gather);
      return <g key={i} transform={`translate(${ox} ${oy}) scale(${markScale*expansion})`} fill="none" stroke={i%5===0?'#718448':'#879660'} strokeWidth={.65} opacity={.6-i*.012}>
       <path d={contourPaths[0].split(" H102")[0]} pathLength={1000} strokeDasharray={1000} strokeDashoffset={interpolate(t,[i*.015,2.4+i*.015],[700,0],clamp)}/></g>;
    })}
   </svg>
   <svg width={width} height={height} style={{position:'absolute',inset:0,overflow:'visible'}}>
    <defs><clipPath id="terrain-p"><g transform={`translate(${markX} ${markY}) scale(${markScale})`}>{contourPaths.map((d,i)=><path key={i} d={d}/>)}</g></clipPath></defs>
    <g style={{opacity:markOpacity}} transform={`translate(${markX} ${markY}) scale(${markScale})`}>
     {contourPaths.map((d,i)=><path key={i} d={d} fill="#53613B" style={{opacity:interpolate(t,[2.8+i*.18,4.3+i*.18],[0,1],clamp)}}/>)}</g>

   </svg>
   <div style={{position:'absolute',left:markX-20*markScale,top:markY-20*markScale,width:384*markScale,height:424*markScale,maskImage:`url(${staticFile('symbol.svg')})`,WebkitMaskImage:`url(${staticFile('symbol.svg')})`,maskSize:'100% 100%',WebkitMaskSize:'100% 100%',opacity:interpolate(t,[4.8,5.6,6.8,7.8],[0,1,1,0],clamp)}}>
    <CanvasImage src={staticFile('terrain.webp')} style={{width:'100%',height:'100%',objectFit:'cover',objectPosition:'70% center'}}/>
   </div>
   <div style={{position:'absolute',left:portrait?'8%':'7%',top:portrait?'13%':'34%',opacity:firstTextOpacity,translate:`0 ${interpolate(t,[.25,1.5],[24,0],clamp)}px`}}>
    <div style={{fontFamily:'HPSans',fontSize:portrait?17:14*unit,letterSpacing:3,marginBottom:25}}>HAZARDPATH / A NEW PERSPECTIVE</div>
    <div style={{fontFamily:'HPSerif',fontSize:portrait?100:112*unit,lineHeight:.93,letterSpacing:-3}}>Every place<br/>has a <span style={{fontFamily:'HPItalic'}}>path.</span></div>
   </div>
   <div style={{position:'absolute',left:0,right:0,bottom:portrait?'13%':'12%',textAlign:'center',fontFamily:'HPSans',fontSize:portrait?18:17*unit,letterSpacing:4,opacity:interpolate(t,[3.4,4.2,5,5.8],[0,1,1,0],clamp)}}>FROM COMPLEXITY TO CLARITY</div>
   <div style={{position:'absolute',left:0,top:0,width:portrait?'100%':'43%',height:portrait?'38%':'100%',background:'#E5EACB',opacity:open,display:'flex',flexDirection:'column',justifyContent:'center',padding:portrait?'65px 70px':'85px 95px',boxSizing:'border-box',translate:`${interpolate(t,[6.4,8],[-24,0],clamp)}px 0`}}>
    <CanvasImage src={staticFile('logo.svg')} style={{width:portrait?360:380*unit,height:'auto',marginBottom:portrait?35:55*unit}}/>
    <div style={{fontFamily:'HPSerif',fontSize:portrait?76:86*unit,lineHeight:.98,letterSpacing:-2}}>A clearer path<br/><span style={{fontFamily:'HPItalic'}}>forward.</span></div>
    <div style={{fontFamily:'HPSans',fontSize:portrait?18:19*unit,lineHeight:1.6,marginTop:25}}>People. Places.<br/>Essential services.</div>
   </div>
 </AbsoluteFill>;
};
export const RemotionRoot: React.FC = () => <>
 <Composition id="ContourAwakening" component={ContourAwakening} durationInFrames={300} fps={30} width={1600} height={900}/>
 <Composition id="ContourAwakeningMobile" component={ContourAwakening} durationInFrames={300} fps={30} width={900} height={1200}/>
</>;
