# Deployment Guide - Homepage Redesign

**Status:** ✅ Changes committed locally, ready to deploy  
**Date:** February 12, 2026

---

## 🔍 PREVIEW BEFORE DEPLOYING (OPTIONAL)

### Option 1: Open Local File in Browser
```bash
cd /home/node/openclaw/danny-website
open index.html  # macOS
# or
xdg-open index.html  # Linux
# or just double-click index.html in file explorer
```

**Pros:** Instant preview  
**Cons:** Some features might not work without a web server (forms, etc.)

### Option 2: Simple Local Web Server
```bash
cd /home/node/openclaw/danny-website
python3 -m http.server 8000
# Then open browser to: http://localhost:8000
```

**Pros:** Full functionality, exactly as it will appear live  
**Cons:** Need to run a command

### Option 3: Just Push and Review on Netlify
```bash
# Deploy immediately, review on live site
git push origin main
```

**Pros:** Fastest path to production  
**Cons:** Changes go live immediately (but can rollback)

---

## 🚀 DEPLOY TO PRODUCTION

### Step 1: Final Pre-Flight Check

Run this checklist:

```bash
cd /home/node/openclaw/danny-website

# 1. Verify you're on main branch
git branch

# 2. Check what's committed
git log -1 --oneline

# 3. Review the diff one more time
git show HEAD

# 4. Confirm remote is correct
git remote -v
```

### Step 2: Push to GitHub (Triggers Netlify Deploy)

```bash
git push origin main
```

**What happens:**
1. GitHub receives your commit (instant)
2. Netlify webhook detects the change (5-10 seconds)
3. Netlify builds and deploys (1-3 minutes)
4. Site goes live at dannygentry.com

### Step 3: Monitor Deployment

**Watch in Netlify Dashboard:**
1. Go to app.netlify.com
2. Find your site
3. Click "Deploys" tab
4. Watch the build progress
5. Look for "Published" status

**Typical timeline:**
- 0:00 - Push to GitHub
- 0:05 - Netlify detects change
- 0:10 - Build starts
- 2:30 - Build completes
- 2:35 - Site is live

### Step 4: Verify Live Site

```bash
# Check the live site
curl -I https://dannygentry.com

# Or just open in browser:
open https://dannygentry.com
```

**What to check:**
- [ ] Hero section shows new headline
- [ ] Dr. Gentry photo appears (not Serpent cover)
- [ ] Books are in new order (Collapse, Kindness, Serpent)
- [ ] CTAs work (Read The Collapse, Book Me to Speak)
- [ ] Mobile responsive (resize browser)
- [ ] All links still work

---

## ⏮️ ROLLBACK (If Needed)

If you push and decide you don't like it:

### Option 1: Rollback in Netlify (Easiest)
1. Go to Netlify dashboard
2. Click "Deploys"
3. Find the previous deploy
4. Click "Publish deploy"
5. Previous version goes live instantly

### Option 2: Git Revert (More Permanent)
```bash
cd /home/node/openclaw/danny-website

# Revert the last commit
git revert HEAD

# Push the revert
git push origin main
```

**Difference:**
- Netlify rollback: Quick, but temporary (keeps new code in git)
- Git revert: Creates a new commit that undoes changes (cleaner history)

---

## 📝 POST-DEPLOYMENT CHECKLIST

After pushing, verify these items:

### Immediate Checks (Within 5 Minutes)
- [ ] Homepage loads without errors
- [ ] Hero section displays correctly
- [ ] All images load (Dr. Gentry photo, book covers)
- [ ] CTAs are clickable and go to correct URLs
- [ ] Books appear in correct order
- [ ] Mobile view looks good (test on phone)

### SEO Checks (Within 1 Hour)
- [ ] View page source - confirm new meta title
- [ ] Check meta description
- [ ] Verify Open Graph tags (share on social media)
- [ ] Confirm Schema.org JSON-LD updated

### Functional Checks
- [ ] Contact form still works
- [ ] Newsletter signup works
- [ ] All book links work (Amazon, trailers)
- [ ] Navigation links work
- [ ] Speaking/consulting pages still accessible

### Performance Checks
- [ ] Page loads quickly (< 3 seconds)
- [ ] No console errors (F12 in browser)
- [ ] Smooth animations
- [ ] No broken images

---

## 🐛 TROUBLESHOOTING

### If Netlify Deploy Fails:

**Check Netlify deploy logs:**
1. Netlify dashboard → Your site → Deploys
2. Click the failed deploy
3. Click "Deploy log"
4. Look for error messages

**Common issues:**
- Build timeout (rare with static HTML)
- Git push failed (check credentials)
- Netlify quota exceeded (unlikely)

**Solution:**
```bash
# Try pushing again
git push origin main

# Or contact Netlify support
```

### If Site Looks Broken:

**Clear browser cache:**
```
Chrome/Edge: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
Firefox: Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)
Safari: Cmd+Option+R
```

**Check in incognito/private window:**
- Eliminates cache issues
- Shows exactly what visitors see

**Verify changes in git:**
```bash
cd /home/node/openclaw/danny-website
git log -1 --stat
```

### If You Change Your Mind:

**Small tweaks:**
- Edit index.html again
- Commit and push
- Netlify auto-deploys the update

**Big changes:**
- Use rollback methods above
- Or keep iterating with new commits

---

## 📊 MONITORING POST-LAUNCH

### Week 1: Watch These Metrics

**Analytics (Google Analytics):**
- Bounce rate (should improve with clearer positioning)
- Time on site (compelling copy should increase)
- Pages per session
- Button clicks (The Collapse CTA, Book Me to Speak)

**Book Sales:**
- The Collapse (should increase)
- The Kindness Tree (may stay same or increase)
- The Serpent (should stay roughly same)

**Speaking Inquiries:**
- Contact form submissions
- "Book Me to Speak" CTA clicks
- Email inquiries about speaking

**Social Signals:**
- Shares (if bold positioning resonates)
- Comments/feedback on social media
- Newsletter signups (clearer value prop)

### Red Flags:
- 🚩 Bounce rate increases significantly
- 🚩 Time on site decreases
- 🚩 Contact form submissions drop
- 🚩 Negative feedback about tone

### Green Lights:
- 🟢 More speaking inquiries
- 🟢 The Collapse sales increase
- 🟢 Newsletter signups increase
- 🟢 Positive comments about authentic voice

---

## 🎯 NEXT STEPS (OPTIONAL ENHANCEMENTS)

Once homepage is live and performing well, consider:

### Phase 2 Enhancements:
1. **Add testimonials section**
   - Quotes from educators who read The Collapse
   - Position above or below books section

2. **"Why I Wrote The Collapse" section**
   - Personal story/manifesto
   - Video or text format
   - Builds emotional connection

3. **"As Featured In" section**
   - Media appearances
   - Podcast interviews
   - Conference presentations

4. **Statistics/Impact section**
   - Teacher retention crisis numbers
   - Education system challenges
   - Makes the case for The Collapse

5. **Book comparison table**
   - Help visitors choose which book to start with
   - "If you're a teacher, start here..."

### Content Strategy:
- Blog posts that expand on The Collapse themes
- Email sequence for newsletter subscribers
- Social media content calendar
- Speaking topic one-pagers

---

## ✅ READY TO DEPLOY?

### Quick Decision Matrix:

**Deploy now if:**
- You love the bold, truth-telling voice
- You're comfortable being positioned as a system challenger
- You want The Collapse to be your flagship
- You're ready to own this brand position

**Wait and revise if:**
- Any copy feels too edgy
- You want to soften the "superintendents don't want you to read" line
- You need to adjust tone/voice
- You want to preview on a local server first

**No action needed if:**
- You want to completely rethink the approach
- You'd prefer a different positioning
- You need more time to consider

---

## 🚀 THE DEPLOY COMMAND

When you're ready:

```bash
cd /home/node/openclaw/danny-website
git push origin main
```

Then watch Netlify deploy at: app.netlify.com

**That's it. Two-word command. Site goes live in 2-3 minutes.** 🎉

---

## 📞 SUPPORT

**If something goes wrong:**
1. Check TROUBLESHOOTING section above
2. Review Netlify deploy logs
3. Contact me for adjustments
4. Rollback using methods above if needed

**If you want copy changes:**
1. Tell me what to adjust
2. I'll make the edits
3. We'll commit and push again
4. No limit on iterations

---

**Remember:** This is a bold brand repositioning. Own it with confidence! 💪

Your new homepage says: "I'm an education thought leader who tells the truth."

If that's who you are, hit deploy and let's go. 🚀
