const key = 'hazardpath:intro-completed';

export function shouldShowIntro({navigationType, referrer, origin, completed}) {
  if (navigationType === 'reload') return true;
  if (navigationType === 'back_forward') return !completed;
  let internal = false;
  try { internal = new URL(referrer).origin === origin; } catch {}
  return !(internal && completed);
}

export function startIntroVisit() {
  let completed = false;
  try { completed = sessionStorage.getItem(key) === 'yes'; } catch {}
  const show = shouldShowIntro({
    navigationType: performance.getEntriesByType('navigation')[0]?.type,
    referrer: document.referrer,
    origin: location.origin,
    completed,
  });
  if (show) { try { sessionStorage.removeItem(key); } catch {} }
  return show;
}

export function finishIntroVisit() {
  try { sessionStorage.setItem(key, 'yes'); } catch {}
}
