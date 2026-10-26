import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';
import {ArrowDown, Pause, Play} from '@phosphor-icons/react';
import {scrollToSection, rebaseAfterIntro} from './motion';
import {flushSync} from 'react-dom';
import {startIntroVisit, finishIntroVisit} from './introVisit';

export default function Intro() {
  const video=useRef(null), section=useRef(null), leaving=useRef(false);
  const [dismissed,setDismissed]=useState(()=>!startIntroVisit());
  const [reduced,setReduced]=useState(()=>matchMedia('(prefers-reduced-motion: reduce)').matches);
  const [mobile,setMobile]=useState(()=>matchMedia('(max-width: 980px)').matches);
  const [playing,setPlaying]=useState(false), [failed,setFailed]=useState(false);
  const [progress,setProgress]=useState(0);
  const dismiss=()=>{
    if(!section.current) return;
    leaving.current=true;
    const remainingScroll=window.scrollY-section.current.offsetHeight;
    finishIntroVisit();
    flushSync(()=>setDismissed(true));
    rebaseAfterIntro(remainingScroll);
  };
  const proceed=()=>{
    if(leaving.current) return;
    leaving.current=true;
    video.current?.pause();
    scrollToSection(document.querySelector('#main'),reduced,dismiss);
  };
  useLayoutEffect(()=>{
    if(dismissed) return;
    const previous=history.scrollRestoration;
    history.scrollRestoration='manual';
    window.scrollTo({top:0,behavior:'instant'});
    return()=>{history.scrollRestoration=previous;};
  },[dismissed]);
  useEffect(()=>{
    if(dismissed) return;
    const motion=matchMedia('(prefers-reduced-motion: reduce)'), size=matchMedia('(max-width: 980px)');
    const motionChange=()=>{setReduced(motion.matches);if(motion.matches)video.current?.pause();};
    const sizeChange=()=>setMobile(size.matches);
    motion.addEventListener('change',motionChange);size.addEventListener('change',sizeChange);
    const updateNav=()=>{
      const visible=section.current?.getBoundingClientRect().bottom<120;
      document.documentElement.dataset.introNav=visible?'visible':'hidden';
      const header=document.querySelector('.header');if(header)header.inert=!visible;
      if(!leaving.current && section.current?.getBoundingClientRect().bottom<=0) dismiss();
    };
    const visibility=()=>{if(document.hidden){video.current?.pause();}};
    const interruptHandoff=()=>{if(leaving.current) dismiss();};
    window.addEventListener('wheel',interruptHandoff,{passive:true});
    window.addEventListener('touchstart',interruptHandoff,{passive:true});
    window.addEventListener('scroll',updateNav,{passive:true});document.addEventListener('visibilitychange',visibility);
    updateNav();
    return()=>{window.removeEventListener('wheel',interruptHandoff);window.removeEventListener('touchstart',interruptHandoff);motion.removeEventListener('change',motionChange);size.removeEventListener('change',sizeChange);window.removeEventListener('scroll',updateNav);document.removeEventListener('visibilitychange',visibility);delete document.documentElement.dataset.introNav;const header=document.querySelector('.header');if(header)header.inert=false;};
  },[dismissed]);
  useEffect(()=>{if(!dismissed&&!reduced&&!failed)video.current?.play().catch(()=>setPlaying(false));},[dismissed,reduced,mobile,failed]);
  const toggle=()=>{if(video.current.paused)video.current.play().catch(()=>setFailed(true));else video.current.pause();};
  if(dismissed) return null;
  return <section ref={section} className="intro-film" aria-label="HazardPath introduction">
    {!reduced&&!failed ? <video ref={video} key={mobile?'portrait':'landscape'} className="intro-video" muted playsInline preload="auto" poster={mobile?'/video/intro-poster-mobile.jpg':'/video/intro-poster.jpg'} src={mobile?'/video/hazardpath-intro-mobile.mp4':'/video/hazardpath-intro.mp4'} onPlay={()=>setPlaying(true)} onPause={()=>setPlaying(false)} onEnded={proceed} onError={()=>setFailed(true)} onTimeUpdate={()=>setProgress(video.current.duration?video.current.currentTime/video.current.duration:0)} aria-label="Contour lines form the HazardPath P, then reveal a riverside community." /> : <div className="intro-still"><img src="/brand/symbol-olive.svg" alt=""/><h1>Every place<br/>has a <em>path.</em></h1><p>HazardPath · People. Places. Essential services.</p></div>}
    <div className="intro-controls">
      <span className="intro-caption">HAZARDPATH <span>/ CONTOUR AWAKENING</span></span>
      <div>
        {!reduced&&!failed && <button onClick={toggle} aria-label={playing?'Pause intro':'Play intro'}>{playing?<Pause/>:<Play/>}<span>{playing?'Pause':'Play'}</span></button>}
        <button onClick={proceed}>{reduced||failed?'Continue':'Skip intro'}<ArrowDown size={18}/></button>
      </div>
    </div>
    {!reduced&&!failed&&<div className="intro-progress" aria-hidden="true" style={{transform:`scaleX(${progress})`}}/>}
  </section>;
}
