# Template: Create Study Guide Website for Any Subject

Use this template to create comprehensive study guides like this one for any subject!

---

## 📋 Step-by-Step Prompt Template

### Step 1: Initial Setup (Copy & Modify This)

```
I have an upcoming [EXAM TYPE] exam for [SUBJECT NAME].

I have these materials:
- @[lecture-slides.pdf] - Main course materials
- @[assignment.pdf] - Practice assignments (optional)
- @[notes.docx] - Additional notes (optional)

SCOPE:
I want to quickly locate specific information and review key concepts.
Focus on [specific topics/chapters if known, or "all exam content"].

DEPTH:
For each topic, provide:
- Key facts and definitions
- One-sentence descriptions
- Important formulas/concepts
- No extended explanations (scannable format)

STRUCTURE:
Present as scannable markdown files organized by:
- Major topics/chapters
- Clear hierarchical structure
- Easy navigation between topics

BOUNDARY:
Include: Only factual information directly from source materials
Exclude: No analysis, interpretation, or speculation

Create .md files for me and organize them into a study guide.
```

---

### Step 2: GitHub Repository Setup

```
Push this to GitHub for me and set up GitHub Pages:
- Repository name: [subject-name]-study-guide
- Make it public
- Enable GitHub Pages with Jekyll theme
- Add navigation between all pages
- Include a comprehensive README
```

---

### Step 3: Add Visual Diagrams

```
Extract diagrams and images from @[lecture-slides.pdf] and add them to the study guides.

IMPORTANT: 
- Create an images/ folder
- Extract only meaningful diagrams (no blank templates)
- Verify each image matches the section content before adding
- Remove any blank university template slides

Add images to relevant sections to help visual learning.
```

---

### Step 4: Add Practice Materials

```
I have these practice materials:
- @[assignment.pdf]
- @[practice-problems.pdf]

Add practice questions with:
- Question → Thought Process → Solution format
- Show step-by-step reasoning
- Include complete worked examples
- Add exam tips and common mistakes
```

---

### Step 5: Create Quick Reference

```
Create a comprehensive Quick Reference Cheat Sheet that includes:
- All key formulas and concepts in one page
- Comparison tables for similar topics
- Common mistakes to avoid
- Exam day checklist
- Last-minute review tips

Make it printable and perfect for quick review.
```

---

### Step 6: Final Polish

```
Review all content and:
1. Fix any incorrectly placed images
2. Verify all navigation links work
3. Add a table of contents to README
4. Ensure mobile-friendly display
5. Check that all formulas are correct
6. Remove any sensitive information (exam dates, room numbers, etc.)

Create an IMAGE-VERIFICATION.md report documenting all diagrams.
```

---

## 🎯 Complete Single Prompt (All-in-One)

If you want everything at once, use this comprehensive prompt:

```
I have an upcoming [EXAM TYPE] exam for [SUBJECT NAME] on [DATE - optional].

MATERIALS:
- @[main-lecture-slides.pdf] - Primary course content
- @[assignment-file.pdf] - Practice problems (optional)
- @[additional-notes] - Extra materials (optional)

GOAL:
Create a comprehensive study guide website with:

1. CONTENT ORGANIZATION:
   - Break down into [X] main topic areas
   - Create separate .md files for each major topic
   - Scannable format with bullet points and tables
   - Key facts, definitions, formulas only
   - No extended explanations

2. STRUCTURE:
   - Clear hierarchical organization
   - Navigation between all pages
   - Home page with table of contents
   - Previous/Next buttons on each page

3. PRACTICE MATERIALS:
   - Extract exercises from materials
   - Format as: Question → Thought Process → Solution
   - Include worked examples
   - Add exam tips and common mistakes

4. VISUAL AIDS:
   - Extract relevant diagrams from PDFs
   - Place in images/ folder
   - Verify each image matches its section
   - Remove blank templates

5. QUICK REFERENCE:
   - Create a one-page cheat sheet
   - All formulas and key concepts
   - Comparison tables
   - Exam checklist

6. GITHUB SETUP:
   - Create repository: [subject-name]-study-guide
   - Enable GitHub Pages
   - Add Jekyll theme (Cayman)
   - Set up proper .gitignore for PDFs
   - Push everything and make it live

7. QUALITY CHECKS:
   - Verify all images are correctly placed
   - Check all navigation links
   - Remove sensitive information
   - Ensure mobile-friendly
   - Create IMAGE-VERIFICATION.md

BOUNDARIES:
- Include: Only factual information from source materials
- Exclude: No speculation, analysis, or personal opinions
- Format: Markdown only, scannable, exam-focused

Make it comprehensive, visual, and perfect for exam preparation!
```

---

## 📝 Example Prompts for Different Subjects

### For Math/Calculus:

```
I have an upcoming midterm exam for Calculus II.

Materials: @calculus-lectures.pdf @homework-solutions.pdf

Create a study guide with:
- All formulas organized by topic
- Step-by-step solution examples
- Common integration/differentiation techniques
- Practice problems with solutions
- Visual graphs and diagrams
- Quick reference formula sheet

Set up GitHub Pages for easy access.
```

---

### For Programming/CS:

```
I have a final exam for Data Structures and Algorithms.

Materials: @lecture-slides.pdf @coding-assignments.pdf

Create a study guide with:
- Data structure comparisons (time/space complexity)
- Algorithm pseudocode and explanations
- Code examples with comments
- Big O notation reference
- Practice problems with solutions
- Visual diagrams of data structures
- Quick reference cheat sheet

Include syntax highlighting for code blocks.
Set up GitHub Pages.
```

---

### For Science (Physics/Chemistry):

```
I have a midterm for Organic Chemistry.

Materials: @chem-lectures.pdf @lab-notes.pdf

Create a study guide with:
- Reaction mechanisms organized by type
- Molecular structure diagrams
- Key concepts and definitions
- Practice problems with solutions
- Comparison tables for similar reactions
- Quick reference sheet with all reactions
- Exam tips for common mistakes

Extract all molecular diagrams from PDFs.
Set up GitHub Pages.
```

---

### For Business/Economics:

```
I have a final exam for Microeconomics.

Materials: @econ-textbook.pdf @lecture-notes.pdf

Create a study guide with:
- Economic models and theories
- Graphs and diagrams (supply/demand, etc.)
- Key formulas and calculations
- Real-world examples
- Practice problems with solutions
- Comparison tables for different market structures
- Quick reference cheat sheet

Extract all graphs and charts from materials.
Set up GitHub Pages.
```

---

### For Humanities/Social Sciences:

```
I have a midterm for World History.

Materials: @history-lectures.pdf @reading-notes.pdf

Create a study guide with:
- Timeline of major events
- Key figures and their contributions
- Cause and effect relationships
- Comparison tables for different periods/regions
- Important dates and facts
- Essay question practice with outlines
- Quick reference chronology

Include maps and historical images if available.
Set up GitHub Pages.
```

---

## 🎨 Customization Options

Add these to your prompt for specific features:

### For Formula-Heavy Subjects:
```
- Use LaTeX notation for all mathematical formulas
- Create a separate formulas reference page
- Include derivations for key equations
- Add unit conversion tables
```

### For Diagram-Heavy Subjects:
```
- Extract ALL diagrams from source materials
- Create a visual glossary page
- Add captions explaining each diagram
- Include comparison diagrams side-by-side
```

### For Code-Heavy Subjects:
```
- Use proper syntax highlighting
- Include runnable code examples
- Add comments explaining each line
- Create a code snippets reference page
```

### For Definition-Heavy Subjects:
```
- Create a glossary page with all terms
- Use definition lists in markdown
- Add cross-references between related terms
- Include etymology or context where helpful
```

---

## 🚀 Advanced Features to Request

```
Additional features you can ask for:

1. SEARCH FUNCTIONALITY:
   "Add a search feature to find topics quickly"

2. DARK MODE:
   "Add dark mode toggle for night studying"

3. PROGRESS TRACKING:
   "Add checkboxes to track completed topics"

4. FLASHCARDS:
   "Create a flashcard page for key terms"

5. PRACTICE QUIZZES:
   "Generate multiple choice quizzes from content"

6. STUDY SCHEDULE:
   "Create a study schedule based on exam date"

7. MOBILE APP:
   "Make it work as a Progressive Web App (PWA)"

8. PRINT VERSION:
   "Create a print-friendly PDF version"
```

---

## ⚠️ Important Reminders

### DO Include in Prompt:
- ✅ Specific exam date (if not sensitive)
- ✅ Main topics to cover
- ✅ Preferred organization structure
- ✅ Special features needed (formulas, code, etc.)
- ✅ All source materials with @ mentions

### DON'T Include:
- ❌ Personal information
- ❌ Student ID numbers
- ❌ Exact exam room/time (can add later locally)
- ❌ Professor names (unless needed for citation)

### Always Request:
- ✅ GitHub Pages setup
- ✅ Mobile-friendly design
- ✅ Navigation between pages
- ✅ Quick reference cheat sheet
- ✅ Image verification
- ✅ .gitignore for sensitive files

---

## 📊 Expected Output Structure

Your study guide will have:

```
repository-name/
├── README.md (Table of contents)
├── index.md (Homepage)
├── _config.yml (Jekyll config)
├── .gitignore (Protect sensitive files)
├── images/ (All diagrams)
├── 01-Topic-One.md
├── 02-Topic-Two.md
├── 03-Topic-Three.md
├── ...
├── XX-Practice-Questions.md
├── XX-Quick-Reference.md
└── IMAGE-VERIFICATION.md
```

---

## 🎓 Tips for Best Results

1. **Be Specific**: Mention exact topics you want covered
2. **Provide Context**: Explain exam format (MC, essay, practical, etc.)
3. **Include All Materials**: Attach all PDFs, docs, images
4. **Request Verification**: Always ask to verify images and formulas
5. **Iterate**: Start with basic structure, then add features
6. **Review**: Check the output and request fixes if needed

---

## 🔄 Iteration Template

If you need changes after initial creation:

```
Please update the study guide:

FIXES NEEDED:
- Fix incorrect image in section X
- Add missing topic Y
- Reorganize section Z

ADDITIONS:
- Add more practice problems for topic A
- Include comparison table for B vs C
- Extract additional diagrams from page X-Y

IMPROVEMENTS:
- Make formulas more prominent
- Add more examples for concept D
- Improve navigation structure
```

---

## 📱 Mobile Optimization Request

```
Optimize the study guide for mobile devices:
- Ensure images scale properly
- Make tables responsive
- Add hamburger menu for navigation
- Test on phone screen sizes
- Ensure touch-friendly buttons
```

---

## 🎯 Quality Checklist

Before finalizing, verify:

- [ ] All topics from syllabus covered
- [ ] Images correctly match their sections
- [ ] All formulas are accurate
- [ ] Navigation works on all pages
- [ ] Mobile-friendly display
- [ ] No sensitive information included
- [ ] GitHub Pages is live and working
- [ ] Quick reference sheet is complete
- [ ] Practice problems have solutions
- [ ] All links work correctly

---

## 💡 Pro Tips

1. **Start Early**: Create guide 2-3 weeks before exam
2. **Update Regularly**: Add notes after each lecture
3. **Test on Mobile**: Check how it looks on your phone
4. **Share Carefully**: Remove personal info before sharing
5. **Backup Locally**: Keep local copy of all files
6. **Print Key Pages**: Print cheat sheet and formulas
7. **Use Offline**: GitHub Pages works offline once loaded

---

## 🌟 Success Examples

This template was used to create:
- ✅ Software Testing Study Guide (15 comprehensive guides)
- ✅ 20+ diagrams extracted and verified
- ✅ Practice questions with solutions
- ✅ Test case design templates
- ✅ Quick reference cheat sheet
- ✅ Full navigation system
- ✅ Mobile-optimized display

You can achieve the same for ANY subject!

---

## 📞 Need Help?

If something doesn't work:

```
The [specific feature] isn't working correctly.

Issue: [describe the problem]
Expected: [what should happen]
Current: [what's happening]

Please fix this and verify it works.
```

---

**Save this template and reuse it for every subject! 🎓**

**Good luck with all your exams! 📚✨**
