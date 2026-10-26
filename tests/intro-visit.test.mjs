import test from 'node:test';
import assert from 'node:assert/strict';
import {shouldShowIntro} from '../src/introVisit.js';
const base = {origin:'https://hazardpath.example',completed:true,navigationType:'navigate'};
test('fresh external and direct entries replay the intro',()=>{
  assert.equal(shouldShowIntro({...base,referrer:''}),true);
  assert.equal(shouldShowIntro({...base,referrer:'https://search.example'}),true);
});
test('completed intro stays dismissed across internal navigation and history',()=>{
  assert.equal(shouldShowIntro({...base,referrer:base.origin+'/pricing'}),false);
  assert.equal(shouldShowIntro({...base,navigationType:'back_forward'}),false);
});
test('reload restarts while an uncompleted visit can still play',()=>{
  assert.equal(shouldShowIntro({...base,navigationType:'reload',referrer:base.origin}),true);
  assert.equal(shouldShowIntro({...base,completed:false,referrer:base.origin}),true);
});
