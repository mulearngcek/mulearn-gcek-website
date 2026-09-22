# AI AGENT INSTRUCTIONS

You are working on the μLearn GCEK website.

## Core Principle

Take ownership of the task.

Inspect the existing project, understand the current implementation, and then make the best implementation you can.

Do not wait for instructions about every small implementation detail. Use your own judgement, creativity, and engineering experience.

## Project Context

This is a real student community website for μLearn GCEK.

The goal is to create a:

- Modern
- Premium
- Clean
- Friendly
- Authentic
- Visually impressive
- Fast
- Responsive

campus website.

It should feel like a real μLearn campus chapter website, not a generic AI-generated SaaS landing page.

## Before Making Changes

- Inspect the existing implementation first.
- Understand the current design system and component structure.
- Reuse existing components and patterns where appropriate.
- Check how the relevant feature currently works before changing it.
- Consider the effect of your changes on the rest of the website.

Do not blindly rewrite existing work.

## Design

Use strong frontend judgement.

Prioritize:

- Visual hierarchy
- Typography
- Spacing
- Composition
- Responsive layouts
- Subtle animations
- Micro-interactions
- Illustrations
- Photography
- Consistent branding
- Accessibility

Use creativity when improving the UI.

Avoid:

- Generic AI/SaaS aesthetics
- Excessive gradients
- Excessive glassmorphism
- Random floating pills
- Unnecessary glow effects
- Overly complicated layouts
- Excessive animations
- Design trends that do not fit μLearn

The design should remain simple while feeling premium.

## μLearn Branding

Always preserve the exact brand:

**μLearn**

Do not change it to:

- MLEARN
- μLEARN
- Mulearn
- MuLearn

Do not invent new brand colors or logos without considering the existing identity.

## Content

Never fabricate factual information.

Do not invent:

- Events
- Dates
- Team members
- Roles
- Statistics
- Sponsors
- Testimonials
- Social links
- Registration links
- Contact information

If real information is unavailable, structure the feature so the information can be added later.

## Architecture

Respect the existing architecture.

Prefer simple, maintainable solutions.

Before creating new abstractions:

- Check whether an existing component can be reused.
- Check whether similar functionality already exists.
- Avoid duplicate logic.
- Avoid unnecessary dependencies.
- Avoid unnecessary architectural changes.

Do not introduce a backend, database, authentication system, CMS, or API unless the task explicitly requires it.

## Content Architecture

Keep website content structured and easy to update.

When appropriate, use the existing content/data architecture instead of hardcoding content directly into UI components.

New content should be easy for another developer to find and edit.

## Images & Assets

Use high-quality visuals where they improve the experience.

Optimize images appropriately.

Prefer modern formats and existing project conventions.

Do not add unnecessarily large assets.

Use meaningful filenames.

## Responsive Design

Every UI change must work properly across:

- Mobile
- Tablet
- Laptop
- Large desktop

Do not design only for the desktop viewport.

## Accessibility

Preserve or improve:

- Semantic HTML
- Keyboard navigation
- Focus states
- ARIA labels where necessary
- Color contrast
- Dialog/menu accessibility
- Reduced-motion considerations

Do not sacrifice accessibility for visual effects.

## Performance

Keep the website fast.

Avoid:

- Unnecessary client components
- Heavy dependencies
- Large JavaScript bundles
- Unoptimized images
- Unnecessary animations
- Repeated expensive computations

Prefer server components where appropriate.

## Code Changes

Make focused changes.

Do not modify unrelated files just because you can.

Do not perform large refactors unless the task genuinely benefits from them.

Preserve existing functionality unless the task requires changing it.

If you discover a small obvious bug directly related to the work, fix it when appropriate.

## Dependencies

Do not add a dependency unless it provides meaningful value.

Do not spend excessive time troubleshooting npm, network, registry, or environment issues unrelated to the actual task.

If the environment has an unrelated problem, work around it when reasonably possible and continue with the task.

## Git

Work only on the assigned branch.

Never force-push.

Never reset or discard another contributor's work.

Do not modify another contributor's branch.

Create focused commits for meaningful completed work.

Use the contributor's configured Git identity when committing.

## Collaboration

Multiple developers and AI agents may work on this repository.

Assume that other people may be modifying the project at the same time.

Before changing shared components, inspect their current state carefully.

Avoid unnecessarily touching files outside your task.

Do not overwrite existing work simply because you would have implemented it differently.

## Verification

Before finishing:

- Review the diff.
- Check for obvious bugs.
- Check responsive behaviour where relevant.
- Check that existing functionality still works.
- Run relevant checks when practical.

Do not spend excessive time fixing unrelated pre-existing issues.

## When the Task Is Ambiguous

Use your judgement.

Do not stop and ask for clarification for every small decision.

Choose the implementation that best fits:

1. The existing project
2. μLearn's identity
3. The requested outcome
4. Good frontend/engineering practices

Only ask for clarification when the ambiguity genuinely prevents you from making a reasonable implementation.

## When You Finish

Do not just describe what could be done.

Actually implement the task.

Then:

1. Review your changes.
2. Verify the result.
3. Commit meaningful completed work.
4. Keep the working tree clean.
5. Report what you changed.
6. Report the commit hash.

## Most Important Rule

Do not make the website look like it was generated from a generic template.

Think like a strong product designer + senior frontend engineer.

Take creative ownership of the implementation while respecting the existing project, μLearn brand, real content, and work of other contributors.
