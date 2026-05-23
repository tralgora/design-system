# Compliance — public mode vs. operator mode

Tralgora products run in two compliance modes. The mode determines what UI is permitted, what language is allowed, and where the disclaimer must appear.

## Public mode

**Scope:** Marketing site, Morning Radar emails, WhatsApp messages, social posts, public dashboards, sample content.

**Allowed**
- Market structure commentary (regime, themes, participation, leadership, macro).
- Theme-level RS rankings.
- Constituent rankings within a theme (price-relative, no recommendation).
- Aggregate flows (FII / DII / VIX / Brent / INR).
- Educational explanations of methodology.

**Not allowed**
- Specific buy / sell / hold language on a single security.
- Targets and stop-losses on public surfaces.
- Personalised recommendations.
- Performance claims framed as predictive ("our calls hit 92%").
- Multibagger / sure-shot / guaranteed-return framing.

**Required UI**
- Full SEBI disclaimer in footer.
- Inline reminder ("Educational only · not investment advice") on any constituent table or theme detail.

## Operator mode

**Scope:** Logged-in product surfaces where the user is operating their own system — Tralgora · Lab (research/backtest) and Tralgora · Cockpit (paper / live execution). Ships later.

**Allowed**
- Strategy authoring with explicit user-defined entries, exits, sizing, and risk rules.
- Backtest output with full performance statistics on user-authored strategies.
- Paper-trade simulation reflecting user's own rules.
- Broker-routed execution gated by user-configured risk limits.

**Not allowed (even in operator mode)**
- Tralgora-authored buy/sell calls served to the user.
- Auto-trading on Tralgora-defined strategies without user authoring.

**Required UI**
- Operator-mode strategies must be marked as user-authored.
- Risk-limit and kill-switch primitives visible at all times.
- Audit trail of every order with timestamp and user attribution.
- The compliance banner shifts: operator-mode displays "Strategy authored by [user]. Tralgora provides infrastructure, not advice."

## Mode switching

The header lockup carries the mode hint. In public mode, the lockup reads `Tralgora · Radar`. In operator mode, it reads `Tralgora · Lab` or `Tralgora · Cockpit`. The user can never be ambiguous about which mode they are in.
