# RustChain Foundation Council Proposal

Submission for: [Scottcjn/rustchain-bounties#12620](https://github.com/Scottcjn/rustchain-bounties/issues/12620)

Author: [@JONASXZB](https://github.com/JONASXZB)

Date: 2026-06-01

## Summary

RustChain should form a small, accountable foundation council that starts conservative, proves itself in public, and only then grows into stronger community governance. The council should not try to replace the operator overnight. It should absorb decisions that need legitimacy, repeatability, and capture resistance: bounty rate changes, Tier-0 recurrence handling, treasury policy, federation approvals, protocol-level RustChain Improvement Proposals, and foundation charter updates.

The cleanest structure is a seven-seat council with equal votes, staggered one-year terms after the bootstrap period, strict conflict disclosures, public vote logs, and a high bar for charter or treasury changes. The design below deliberately keeps BoTTube.ai and Elyan Labs outside foundation control. RustChain can become community-governed without muddying commercial IP ownership.

## Proposed Three-Criteria Thresholds

The RFC names three eligibility pillars: continue building, hold, and advertise for the future. I would make them measurable but not so rigid that only early insiders can qualify.

1. Continue building: at least Miner tier for ordinary seats, with a path toward Foreman. A nominee should have either 3 merged PRs over 30+ days, or 1 accepted high-signal contribution such as a confirmed medium bug report, security review, or governance proposal. Foreman-tier contributors should receive nomination priority, but Miner-tier contributors should not be locked out of the first council.

2. Hold: at least 250 RTC held continuously for 45 days for ordinary seats, rising to 1,000 RTC after the first six months. The initial threshold should be lower than 1,000 RTC because the program is still young and has no public off-ramp. Requiring 1,000 RTC immediately risks selecting only the earliest or most privileged holders rather than the best stewards.

3. Advertise for the future: at least two public RustChain-positive artifacts in the previous 90 days. Examples: a tutorial, bug report write-up, integration note, translation, demo, bounty retrospective, or public explanation of a RustChain design choice. Low-quality spam, fake engagement, bought stars, or engagement farming should not count.

## A. Council Size and Composition

Start with seven seats. Seven is large enough to avoid one-person capture and small enough to move quickly. A three-seat council is too fragile; five is workable but still too easy for two aligned members plus the operator to dominate. Nine or eleven creates process overhead before RustChain has the governance muscle to use it well.

Recommended seats:

- Two engineering seats for contributors with sustained code or review work.
- One security seat for exploit thinking, Tier-0 review, and recurrence-watch designations.
- One ecosystem seat for partnerships, onboarding, documentation, and community quality.
- One treasury and operations seat for bounty calibration and payout policy.
- One federation seat for bridge, MergeWork, and cross-ledger decisions.
- One rotating public-interest seat for newer but high-signal contributors.

Seats should vote equally. Weighted voting by PR count or RTC held sounds meritocratic, but in practice it creates whale and early-arrival capture. Contributor history and RTC holdings should be eligibility gates, not vote multipliers.

## B. Voting Mechanics

Use simple majority for routine decisions, two-thirds for protocol or treasury decisions, and five-of-seven for charter changes or IP-boundary decisions.

Routine decisions include bounty label clarifications, minor process updates, documentation policy, and non-binding recommendations. These pass with four of seven.

Major decisions include bounty rate tier changes, large treasury allocations, federation approvals, protocol-level RIP adoption, and Tier-0 recurrence policy. These require five of seven.

Charter decisions include changing council size, changing seat eligibility, changing the relationship between RustChain and any commercial entity, or modifying the requirement that BoTTube/Elyan Labs IP remains separate. These require five of seven plus a seven-day public comment period before the vote.

Quorum should be five of seven for any binding decision. Abstentions count toward quorum but not toward yes votes. A member with a conflict must disclose and recuse; the quorum threshold remains five unless recusals make the vote impossible, in which case the decision waits or moves to public advisory review.

## C. Term Length, Rotation, and Succession

Bootstrap the first council for six months. After bootstrap, move to one-year terms with staggered expirations. Three seats expire every six months, then four seats six months later. This prevents a full council reset and keeps institutional memory.

Members can serve two consecutive terms, then must sit out one cycle unless no qualified nominee exists for their seat category. This prevents a permanent founding clique without forcing good contributors out when the community is still small.

Removal should be possible for three reasons:

1. Eligibility lapse: the member no longer builds, holds, or publicly supports RustChain for more than a 45-day grace period.
2. Misconduct: fake engagement, plagiarism, undisclosed paid influence, bounty farming coordination, or private-key misuse.
3. Absence: missed votes or no public activity for 60 days.

Removal requires five of seven, excluding the member under review. If that is impossible because of conflicts, the operator can open a public removal RFC and advisory vote, with final action recorded publicly.

## D. Decision Scope

The council should decide:

- Bounty rate tier changes and trigger rules.
- Treasury allocations from foundation or community wallets.
- Tier-0 recurrence watch and destructive-PR escalation policy.
- Federation partnership approvals and staged rollout gates.
- Protocol-level RustChain Improvement Proposals.
- Contributor ladder changes once governance rights are attached to tiers.
- Foundation charter changes.

The council should not decide:

- Day-to-day merge decisions on individual PRs.
- Routine operator payouts under already-published rules.
- BoTTube.ai, Elyan Labs, or other commercial IP ownership.
- Private employment, vendor, or customer decisions belonging to commercial entities.
- Emergency security pauses, although it should review them after the fact.

The operator should retain emergency pause authority for safety-critical actions, but every emergency pause must get a public postmortem within seven days and a council review within fourteen days.

## E. Foundation Legal Structure

My recommendation is a two-stage path: start as an unincorporated governance council with a public charter, then form a Swiss verein or Cayman Foundation Company once treasury size and cross-border obligations justify legal cost.

A US 501(c)(3) has credibility but may be awkward for a tokenized contributor economy, treasury payouts, and international bounty contributors. A US LLC is flexible but reads commercial, not foundation-like. A decentralized DAO with no legal wrapper is too immature for IP separation, treasury responsibility, and contributor protection.

Swiss verein and Cayman Foundation Company are the strongest candidates. Swiss verein has nonprofit credibility and is familiar in open technical foundations. Cayman Foundation Company is common in crypto, clean for token ecosystems, and strong for separating founder/operator roles from foundation assets. I would choose Swiss verein if the priority is public-interest legitimacy and contributor trust; choose Cayman if the priority is token-governance flexibility and crypto-native operations.

For the next six months, do not incorporate yet. Adopt a public charter first, operate the bootstrap council, publish votes, prove the treasury controls, and then incorporate with evidence rather than guesses.

## F. Conflict-of-Interest and Transparency Requirements

Every council member should maintain a public disclosure file with:

- RTC holdings band, updated monthly.
- Any RustChain-related compensation outside bounty payouts.
- Any commercial entity they own or work for that interacts with RustChain.
- Any close relationship with vendors, federation partners, or large holders.
- Whether they hold BoTTube/Elyan Labs equity, contracts, or paid roles.

Votes should be recorded publicly with member names, vote choice, rationale, and recusal notes. Treasury actions should include amount, recipient, reason, linked decision, and transaction reference. The council should publish a monthly transparency note: open decisions, closed decisions, treasury movement, conflicts disclosed, and unresolved risks.

## G. Capture-Resistance Design

Whale capture: holdings are an eligibility gate, not voting weight. Add a maximum of one seat per household or controlled entity, and require public holdings bands. If someone buys a large RTC position, they gain skin in the game, not extra votes.

Operator capture: the operator may hold one council seat during bootstrap but should not have a permanent veto. The operator keeps emergency pause authority, but emergency use gets public review. After 18 months, the operator seat should become an ordinary elected seat or non-voting administrator role.

Cabal capture: use term limits, the rotating public-interest seat, public nominations, and a requirement that at least two seats be held by contributors who were not in the first council after the first year.

IP capture: the charter must explicitly say RustChain foundation governance does not control BoTTube.ai, Elyan Labs, or commercial IP. Any proposal touching that boundary requires the highest vote threshold and public legal review.

Bounty-farm capture: fake stars, repetitive low-value claims, and coordinated engagement should disqualify nominees for a cooling-off period. The advertised-for-the-future pillar should count durable educational artifacts, not engagement numbers.

## H. Bridge From Current State

Use a three-phase transition.

Phase 1, first 60 days: operator appoints a provisional seven-seat council from known high-signal contributors and one newer contributor. The council votes publicly, but the operator retains final authority. Purpose: practice public governance without pretending decentralization is already complete.

Phase 2, months 3-6: open nominations for expiring bootstrap seats. Nominees publish eligibility declarations. Current council and operator verify eligibility. Community feedback runs for seven days. Seats are filled by hybrid voting: one member, one advisory comment for reputation signal; final appointment by council majority.

Phase 3, after six months: council decisions become binding within the published scope. Operator remains administrator and emergency safety holder, not unilateral governance authority. Charter changes require the high threshold described above.

## Self-Declaration

I am not claiming current Foreman status, council eligibility, RTC holdings, or prior sustained RustChain contribution. This proposal is submitted as an outside governance design contribution. If this proposal is considered for a payout, I can provide a valid RTC-compatible wallet after maintainer confirmation. Please do not treat any EVM/USDT address as an RTC wallet unless I explicitly provide an RTC-format payout address.

