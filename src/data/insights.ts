export type ContentBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string };

export type Insight = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  content: ContentBlock[];
};

export const insights: Insight[] = [
  {
    slug: "product-teams-testing-real-users",
    title: "Marcello Genovese on Why Product Teams Should Never Stop Testing with Real Users",
    excerpt: "Technology strategist Marcello Genovese learned a counterintuitive lesson early in his career.",
    image: "/media/image-2.webp",
    content: [
      {
        type: "paragraph", text: "Technology strategist Marcello Genovese learned a counterintuitive lesson early in his career: the more confident a product team feels, the more danger they’re probably in. Confidence without continuous user validation, he argues, is how promising products turn into expensive failures."
      },
      {
        type: "paragraph", text: "“Talk to your users, do reviews, run user testing,” Genovese explains. “There are plenty of testing platforms out there. Even if you can’t find the right user for your product to test it, sometimes the least likely person helps make your product stronger and gives you a different viewpoint.”"
      },
      {
        type: "paragraph", text: "“That willingness to test with anyone, even users outside the target demographic, signals a deeper philosophy at Genovese. He believes product teams suffer less from bad ideas than from unchallenged assumptions. The solution isn’t better brainstorming. It’s relentless reality-checking against how real people actually interact with what you’ve built.”"
      },
      { type: "heading", text: "When Intuition Becomes a Liability" },
      { type: "paragraph", text: "Genovese traces his skepticism about unchecked product intuition back to his unconventional entry into technology. Before launching his first company at age 15, he spent years performing as a wedding singer and DJ across Germany, often accompanying his father, a professional artist, to events.“My father was always my mentor,” Genovese recalls. “Since I was a kid, I went with him to events where he was singing. Instead of going hiking or skiing, we went to events, made music, and did business.”That entertainment background taught him something most product leaders learn too late: what works in theory can die onstage. Performers get immediate feedback. A crowd either responds or doesn’t. Product teams, by contrast, can insulate themselves from users for months while building elaborate features nobody asked for.The question of when product intuition stops being enough, and process needs to take over, elicits a sharp response from Genovese. “If you think through a product and you have an idea about how the user wants to use it, you need a process before building. You can start building without one, but then you risk failure or building something the user won’t like.”His point cuts against the “just ship it” mentality that pervades startup culture. Shipping without validation isn’t bold. It’s reckless." },

      { type: "heading", text: "The Investor Litmus Test" },
      { type: "paragraph", text: "Genovese offers a diagnostic for identifying when a company’s internal incentives are quietly working against the product: check who the team is actually building for.“The user is what matters most,” he says. “You should keep the company mission and build a product that solves a problem, but I would never change a product just because an investor wants something. If it’s stupid, I don’t care who’s making money.”The pattern he describes is common enough to be predictable. A product gains early traction with a clear value proposition. Investors get involved. Suddenly, the roadmap fills with features designed to impress pitch meetings rather than solve user problems. Metrics get optimized for fundraising decks. The original vision gets diluted in pursuit of growth signals that look good on paper.“Teams try to fulfill investor needs or CEO wishes, but you should keep your vision and what you stand for. Don’t build a product that does everything,” Genovese observes.This mission creep shows up in predictable ways. Products add complexity instead of refinement. Feature bloat replaces focused execution. Teams mistake activity for progress, shipping updates that serve internal stakeholders while actual users get increasingly frustrated.The correction requires discipline that many teams lack: repeatedly asking whether each decision serves the person actually using the product or someone else entirely." },

      { type: "heading", text: "Where AI Products Fail Users" },
      { type: "paragraph", text: "When the conversation turns to artificial intelligence, Genovese’s user-first framework reveals why so many AI features feel gratuitous rather than useful.“AI isn’t over-applied right now in products,” he says. “It’s more about doing it the right way. If AI doesn’t solve a problem or help the user, and it’s just a button that says ‘do this with AI,’ it doesn’t make sense. But if it solves a problem and gives additional help, then it’s useful.”The distinction matters more than most product teams acknowledge. Adding AI capabilities because competitors have them or because investors expect them produces exactly the kind of feature bloat Genovese criticizes. Users don’t care about the underlying technology. They care whether something makes their lives easier.“What does it help the user? Does it make the user’s life easier? Is it solving a problem?” Genovese asks. That’s the question product leaders should answer before integrating AI into user-facing systems, not after.His broader point extends beyond AI to any technology decision. “Technology should support the product. Everything is possible. We have enough computing power and everything needed to make a great product. For me, it’s always about the user interface. It’s about speed. It has to react immediately, not have long load times just because of the technology.”Technology serves the user experience, not the other way around. When teams prioritize technical sophistication over practical utility, they’ve already lost the plot." },

      { type: "heading", text: "Product Leadership vs Founder-Led Chaos" },
      { type: "paragraph", text: "Genovese draws a clear distinction between product leadership and the founder-led chaos that often passes for it in early-stage companies. The difference shows up most clearly when things aren’t going well.“Good product leadership means going back to your roots,” he says. “What was my initial vision for this product? What was my idea? Are we focusing on solving a problem for the consumer, or just fulfilling wishes from people who don’t actually use the product and have unrealistic ideas?”That ability to cut through accumulated complexity and return to first principles separates leaders from founders who’ve simply been promoted. It requires intellectual honesty about what’s working and what isn’t, without the ego protection that makes many founders allergic to negative feedback.“If your product isn’t doing well, look into why. What was the initial vision? What are you solving? How is the user experience now, and what could be better? Talk with your user, talk with your customer. Find out what they need, what they want, and what they don’t like. That’s what’s important.”The advice sounds simple because it is. Complexity isn’t the problem. Avoidance is. Teams accumulate features, processes, and stakeholder requirements while systematically avoiding the hard conversations with actual users that would expose fundamental issues.Founder-led chaos, by contrast, produces thrash without direction. Decisions get made based on whoever spoke to the founder last. Strategy shifts with each new insight or competitive threat. The roadmap becomes a wish list rather than a coherent plan. Users experience this as inconsistency, confusion, and a product that never quite delivers on its promise.“The biggest problem is that now everyone thinks they can build a good product, but they don’t think the product through. You should sometimes go back to your roots and rethink the product first, then start building. Don’t just add features and hope it somehow works without really understanding how.”" },

      { type: "heading", text: "The Cost of Getting It Wrong" },
      { type: "paragraph", text: "Genovese’s harshest judgment is reserved for the mistake most teams keep making: confusing early traction with product-market fit. A product can show promising initial metrics while fundamentally misunderstanding what users actually need.“My biggest lesson is to keep your vision, keep your first idea, and focus on solving the problem for the user. That’s the biggest problem when you grow. When you have paying customers, focus on them. Don’t focus on the investor, the CEO, the CTO, or the engineers. Focus on what makes the customer happy.”The repetition is intentional. Genovese sees teams repeatedly make the same error: optimizing for everyone except the person actually using the product. The pattern becomes self-reinforcing. Internal stakeholders have louder voices and clearer asks than users do. Investors have leverage. Executives have authority. Users just quietly stop using the product.By the time usage metrics show the problem, months of work have been invested in the wrong direction. That’s when Genovese’s most radical advice becomes relevant: sometimes you need to throw everything away and start over.“Be bold enough to throw away what you’ve done and start from scratch.”Most teams resist this advice because of the sunk cost fallacy. They’ve invested too much to abandon the current approach, even when evidence suggests it isn’t working. Genovese argues the opposite: when a product is built on faulty assumptions, incremental fixes just compound the error. Better to acknowledge the mistake and rebuild with proper user validation from the beginning.“I’ve seen products improve their design and structure when they started from scratch and rethought from the beginning what problem they’re actually solving. The product became much better.””" },

      { type: "heading", text: "Continuous Testing as Culture" },
      { type: "paragraph", text: "The practical question becomes how to embed continuous user testing into team culture rather than treating it as a one-time validation exercise. Genovese’s answer combines accessibility with frequency.“Try it out, test it, find out if it works. If it breaks, then redo it,” he says simply. The key is removing friction from the testing process so it becomes routine rather than special.This means using simple prototypes that can be validated quickly. “I test products with simple prototypes that may look ugly, but they have the functionality, and that helps.” The goal isn’t to impress users with polish. It’s learning whether the core concept resonates before investing in refinement.It also means accepting feedback from unexpected sources. Genovese explicitly advocates testing with people outside your target demographic because they’ll spot confusing elements that regular users might overlook or accept. Fresh eyes catch problems that familiarity masks.The broader principle is to treat product development as continuous discovery rather than as sequential stages. You don’t research users, then design, then build, then test. You’re constantly cycling between all those activities, using each insight to inform the next decision.Teams that separate building from testing inevitably build the wrong thing. The gap between what users say they want and what they actually respond to can only be bridged through repeated contact with real usage patterns.”" },
    ],
  },
  {
    slug: "intuition-fails-process-takes-over",
    title:
      "Marcello Genovese on When Intuition Fails and Process Must Take Over",
    excerpt:
      "Engagement numbers climb month over month. Retention curves hold steady.",
    image: "/media/image-1.webp",
    content: [
      {
        type: "paragraph", text: "Engagement numbers climb month over month. Retention curves hold steady. Dashboard metrics glow green across every category. Yet something is fundamentally broken with the product, and by the time the team realizes it, they’ve burned through months of runway building features nobody wanted.Product executive Marcello Genovese has watched this scenario play out repeatedly. The problem isn’t bad execution or insufficient resources. It’s that teams optimize for metrics that mask underlying product-market fit issues, mistaking healthy-looking numbers for validation that their product actually solves problems users care about."
      },
      {
        type: "paragraph", text: "“If you build a product that solves a real problem for the user, then you’re solving something important,” Genovese says. “Build for the user, not for the technology or fancy interactions or excessive functions. That makes the difference.”"
      },
      {
        type: "paragraph", text: "The distinction between products that scale sustainably and those that burn out after early traction comes down to whether the core value proposition genuinely resonates. Growth hacks, viral loops, and retention tactics can temporarily mask weak fundamentals. Eventually, the gap between what the product promises and what it delivers catches up."
      },
      { type: "heading", text: "When Good Metrics Hide Bad Products" },
      { type: "paragraph", text: "Genovese points to a pattern that even experienced teams can fall into. A product shows early traction. Users sign up. Engagement looks reasonable. Investors get excited. The team doubles down on growth, adding features and expanding the roadmap. Six months later, churn accelerates, word of mouth stalls, and nobody can articulate why users actually need what they’ve built.The root cause is measuring outputs rather than outcomes. A product can successfully drive behavior without successfully solving problems. Users might engage with the product because it’s addictive, not because it’s useful. They might stick around because switching costs are high, not because they’re satisfied.This is where intuition becomes actively dangerous. Founders look at positive metrics and trust their gut that they’re on the right track. The data seems to confirm their vision. Internal conviction strengthens. Meanwhile, actual users experience friction, confusion, or indifference that doesn’t show up in aggregate statistics.“People misunderstand that nothing is as easy as it looks,” Genovese observes. “You still need to think through your product, and a good product strategy is always about the end user and how they’re going to use it.”The correction requires systematic user contact that goes beyond surveys or focus groups. It means watching people actually use the product, asking what problems they’re trying to solve, and discovering whether your solution addresses those problems or just creates busywork they tolerate." },

      { type: "heading", text: "Why Startups Break at Series A and B" },
      { type: "paragraph", text: "Genovese reserves particular criticism for how companies lose their way during growth-stage funding rounds. The pattern is predictable enough to be almost formulaic. A startup finds early traction with a focused value proposition. They raise a Series A or B. Within six months, the product has morphed into something bloated and confused.“You see products that start strong and get traction, then they try to fulfill investor needs or CEO wishes,” Genovese notes. “You should keep your vision and what you stand for, not build a product that does everything.”The breakdown happens because the stakeholder base expands dramatically during these rounds. New board members bring opinions about what the product should become. Investors want features that signal the company can reach the next valuation milestone. Executives hired from larger companies import playbooks that worked elsewhere. The founder’s original vision gets diluted in the pursuit of consensus.Teams that rely primarily on intuition are particularly vulnerable to this drift. Without a rigorous process for evaluating which ideas actually serve users, every suggestion from a credible source feels equally valid. The roadmap becomes a collection of compromises rather than a coherent plan.“Teams should keep their vision,” Genovese argues. “Don’t just build for investors or others in the company. Keep the vision and the idea for solving the problem for the user. Always focus on the first idea you had.”The test Genovese applies cuts through the complexity: “Are we focusing on solving a problem for the consumer, or just fulfilling wishes from people who don’t actually use the product?”Most teams that break during growth funding fail this test. They’re building for pitch meetings, for competitive positioning, for internal politics. The actual user becomes an abstraction rather than the north star guiding every decision." },

      { type: "heading", text: "The Validation Framework That Scales" },
      { type: "paragraph", text: "Process, in Genovese’s framework, isn’t about bureaucracy or approval chains. It’s about systematic reality-checking that persists even as the organization grows and pressure to ship increases.“If you think through a product and you have an idea about how the user wants to use it, you need a process before building,” he explains. “You can start building without one, but then you risk failure or building something the user won’t like.”The specific mechanism matters less than the commitment to validation before resource allocation. For Genovese, that means rapid prototyping with minimal investment to test whether anyone actually wants what you’re planning to build.“I test products with simple prototypes that may look ugly, but they have the functionality, and that helps,” he says. These stripped-down versions expose flawed assumptions before significant engineering resources get committed.The approach inverts how many teams operate, particularly at the growth stage. Instead of detailed specifications, elaborate development, and polished launches, Genovese advocates putting rough prototypes in front of users immediately. Polish comes later, once you’ve validated that the core concept resonates.This requires overcoming the instinct most teams have to perfect things before showing them to the outside world. At Series A and B, when the company has real revenue and institutional investors, shipping ugly prototypes feels unprofessional. The pressure is to look credible, act like a mature company, and maintain brand standards.Genovese argues those instincts lead directly to expensive failures. If a rough prototype can’t demonstrate value, a polished version won’t either. You’ve just spent more time and money reaching the same conclusion.“Even if you can’t find the right user for your product to test it, sometimes the least likely person helps make your product stronger and gives you a different viewpoint,” he notes." },

      { type: "heading", text: "When to Throw Everything Away" },
      {
        type: "paragraph", text: "Genovese’s most radical advice addresses this directly: sometimes the best path forward isn’t iteration. It’s a complete rebuild.“Be bold enough to throw away what you’ve done and start from scratch,” he says. “I’ve seen products improve their design and structure when they started from and rethought from the beginning what problem they’re actually solving. The product became much better.”"
      },
      {
        type: "paragraph", text: "“This willingness to discard work reflects a specific understanding of how technical debt and conceptual debt compound. When a product is built on flawed assumptions about what users want, every feature adds weight to a shaky foundation. Incremental improvements optimize the wrong thing.”"
      },
      {
        type: "paragraph", text: "The difficulty is recognizing when you’re in that situation. Teams naturally resist the idea that months of work need to be discarded. Founders have emotional attachments to features they championed. Engineers take pride in the systems they’ve built. Investors want to see their capital produce outcomes, not restarts."
      },
      {
        type: "paragraph", text: "Genovese frames the decision around the original vision: “What was my initial idea for this product? Are we still solving that problem, or have we drifted into something else?”"
      },
      {
        type: "paragraph", text: "If the answer reveals substantial drift, especially drift away from solving real user problems and toward satisfying internal or investor preferences, rebuild becomes preferable to continued iteration. You’re no longer optimizing for product-market fit. You’re just making a fundamentally misaligned product more elaborate."
      },
      {
        type: "paragraph", text: "For growth-stage companies, this advice is particularly painful but also particularly necessary. The scale of operations makes pivots expensive. But continuing down a wrong path at scale just amplifies the eventual failure."
      },

      { type: "heading", text: "The Modern Tooling Paradox" },
      {
        type: "paragraph", text: "Genovese identifies a shift that has both accelerated innovation and introduced new failure modes. Tools for building digital products have improved dramatically, making execution faster and cheaper than ever.“AI helps build digital products much faster now, but you still need to think through your product,” he observes. “Good product strategy is always about the end user and how they’re going to use it.”The paradox is that improved tooling removes natural constraints that once forced validation. When building something took months and required significant capital, teams had no choice but to think carefully before committing. Now you can build elaborate features in weeks, which means teams can travel much farther down the wrong path before recognizing the mistake.This has particular implications for growth-stage companies with engineering teams large enough to ship quickly. The velocity feels like progress. Roadmaps fill with shipped features. Sprint retrospectives show consistent delivery. Yet the product doesn’t gain traction because all that execution is misdirected.The corrective is to use speed for learning rather than for building. Modern tools should enable testing more hypotheses with rough prototypes, not shipping more features without validation. The advantage isn’t that you can go faster. It’s that you can fail cheaper and learn sooner.“Talk to your users, do reviews, run user testing,” Genovese says. “There are plenty of testing platforms out there.”The practical implementation comes down to making user feedback constant rather than episodic. Not a quarterly research study. Not a pre-launch validation exercise. An ongoing dialogue in which insights inform decisions in near real time."
      },
      { type: "heading", text: "Process Without Bureaucracy" },
      {
        type: "paragraph", text: "Teams often interpret “process” as permission to create governance structures that slow everything down. Approval chains, documentation requirements, and stage gates that turn shipping into an ordeal.Genovese’s version of process is simpler: before you build anything significant, show something rough to actual users and watch what happens.This requires cultural shifts that many growth-stage companies resist. Startups succeed early by moving fast and trusting founder intuition. Scaling that approach means hiring people who share the vision and empowering them to make decisions. Adding validation gates feels like returning to corporate dysfunction that the founders escaped.The distinction is whether the process serves learning or control. The bureaucratic process exists to maintain consistency and reduce risk through centralized decision-making. Learning process exists to maximize contact with reality before committing resources.“If your product isn’t doing well, look into why,” Genovese says. “What was the initial vision? What are you solving? Talk with your user, talk with your customer. Find out what they need, what they want, what they don’t like.”Teams that internalize this develop better intuition over time, because their hunches get constantly calibrated against actual behavior. The goal isn’t eliminating gut instinct. It’s training that is based on reality rather than assumptions."
      },
    ],
  },
  {
    slug: "balance-speed-trust-product-development",
    title: "How Marcello Genovese Learned to Balance Speed and Trust in Product Development",
    excerpt:
      "Product leaders hear the same demand from every direction: ship faster. Investors want momentum.",
    image: "/media/image-3.webp",
    content: [
      {
        type: "paragraph", text: "Product leaders hear the same demand from every direction: ship faster. Investors want momentum. Competitors launch features that need responses. Engineering teams want to prove velocity. Users expect constant updates. The pressure to move quickly becomes overwhelming."
      },
      {
        type: "paragraph", text: "Product executive Marcello Genovese argues this pressure often destroys the things teams are trying to build. Speed without direction erodes the trust that keeps users engaged. Velocity becomes valuable only when it serves a coherent vision rather than just producing output."
      },
      {
        type: "paragraph", text: "“Teams should keep their vision,” Genovese says. “Don’t just build for investors or others in the company. Keep the vision and the idea for solving the problem for the user. Always focus on the first idea you had.”"
      },
      {
        type: "paragraph", text: "The challenge isn’t choosing between speed and quality, or between growth and trust. It’s maintaining clarity about what problem you’re solving when everyone around you is demanding you solve different problems faster."
      },
      { type: "heading", text: "When Speed Becomes the Enemy" },
      { type: "paragraph", text: "Genovese traces the breakdown back to a fundamental confusion about what speed means in product development. Teams measure velocity by the number of features shipped, releases published, and sprint points completed. Those metrics capture activity but say nothing about whether the activity moves toward solving real user problems.“You see products that start strong and get traction, then they try to fulfill investor needs or CEO wishes,” Genovese observes. “You should keep your vision and what you stand for, not build a product that does everything.”The story unfolds predictably. A product launches with a focused value proposition. Early users respond positively. Traction leads to funding. New stakeholders bring new opinions. The roadmap expands to accommodate everyone’s ideas. Users experience this as confusion about what the product actually does.The measured output speed looks impressive. Speed measured as progress toward product-market fit reveals stagnation or regression. The product moves quickly while going nowhere.This matters particularly for trust. Users choose products based on clear promises about what problems they solve. When a product keeps adding capabilities in different directions, users can’t tell whether the core promise still holds.“If you build a product that solves a real problem for the user, then you’re solving something important,” Genovese argues. “Build for the user, not for the technology or fancy interactions or excessive functions. That makes the difference.”" },

      { type: "heading", text: "The Investor Pressure Problem" },
      { type: "paragraph", text: "Genovese speaks bluntly about a dynamic most product leaders experience but few discuss openly: investor pressure to ship features that serve fundraising narratives rather than user needs.The sequence repeats across companies. A board meeting approaches. Investors ask about competitive positioning. Someone mentions a feature competitors have launched. The roadmap shifts to prioritize features that look good in the next pitch rather than the capabilities users actually request.“The user is what matters most,” Genovese states. “You should keep the company mission and build a product that solves a problem, but I would never change a product just because an investor wants something. If it’s stupid, I don’t care who’s making money.”The statement reflects hard-won lessons. Genovese started his first company before age 16, becoming one of Germany’s youngest entrepreneurs. Over years of building ventures with business partner Stefan Graf, he learned to distinguish between stakeholder pressure that improves products and pressure that just serves someone else’s agenda.The practical question becomes how to resist that pressure without alienating people who control the company’s future. Genovese’s answer centers on user evidence. When investors push for features, the response isn’t refusal. It’s redirecting the conversation toward what users are actually asking for.“Are we focusing on solving a problem for the consumer, or just fulfilling wishes from people who don’t actually use the product?” Genovese asks. Framing decisions around that question makes it harder for stakeholder preferences to override user needs.The underlying principle is that user trust matters more than satisfying investors. If users stop trusting that your product does what it promises, no amount of investor satisfaction will save the company." },

      { type: "heading", text: "Trust as a Product Attribute" },
      { type: "paragraph", text: "Most product teams think about trust as something that happens outside the product. Privacy policies. Security measures. Support responsiveness. Those elements matter, but Genovese argues trust is fundamentally about whether the product consistently does what users expect.“Good product strategy is always about the end user and how they’re going to use it,” he explains. “People misunderstand that nothing is as easy as it looks. You still need to think through your product.”This reveals why speed often erodes trust. When teams ship features quickly without validating whether users want them, the product becomes unpredictable. Users open the app and find new capabilities they didn’t request. Familiar workflows change without warning. Each change might be defensible on its own, but the cumulative effect is that users can’t trust the product to remain stable.The corrective isn’t moving slowly. It’s moving deliberately. Genovese advocates for rapid testing with rough prototypes to validate ideas quickly, followed by careful implementation once you know something is worth building.“I test products with simple prototypes that may look ugly, but they have the functionality, and that helps,” he says. Learn fast whether an idea resonates. Then, when you commit to building something properly, the pace can be more measured because you’re confident it’s worth doing." },

      { type: "heading", text: "Platform Responsibility at Scale" },
      {
        type: "paragraph", text: "As products scale and user bases grow, the stakes around trust and responsibility increase dramatically. Decisions that affected hundreds of users in the early stages now affect thousands or millions."
      },
      {
        type: "paragraph", text: "Genovese identifies this transition as particularly difficult for founder-led teams. The instincts that work for early-stage products often break when applied to platforms with substantial user bases.  "
      },
      {
        type: "paragraph", text: "“Good product leadership means going back to your roots,” he argues. “What was my initial vision for this product? What was my idea? Are we still solving that problem, or have we drifted into something else?”"
      },
      {
        type: "paragraph", text: "The distinction between product leadership and founder-led chaos becomes most clear when things aren’t working. Founders tend to react to problems by adding features, launching initiatives, and reorganizing teams. The bias is toward action and speed. Product leaders step back and ask whether the activity serves the original vision or just creates motion."
      },
      {
        type: "paragraph", text: "“If your product isn’t doing well, look into why,” Genovese advises. “What was the initial vision? What are you solving? Talk with your user, talk with your customer. Find out what they need, what they want, what they don’t like.”"
      },
      {
        type: "paragraph", text: "The responsibility piece comes from recognizing that at scale, your product shapes user behavior whether you intend it to or not. Interface choices determine what people pay attention to. Feature design determines what actions feel easy or difficult. Teams that move too fast skip considering those second-order effects."
      },

      { type: "heading", text: "The Vision Anchor" },
      {
        type: "paragraph", text: "Genovese returns repeatedly to maintaining product vision as the solution to competing pressures around speed, stakeholder demands, and trust.“Keep your vision and what you stand for,” he emphasizes. This isn’t about rigid adherence to original plans regardless of market feedback. It’s about distinguishing between insights that improve how you solve the core problem and pressure that dilutes focus by trying to solve different problems.The practical test is straightforward. When someone proposes a new feature or direction, the question isn’t whether it’s a good idea in isolation. It’s whether it serves users trying to solve the problem your product addresses. If yes, the feature strengthens the vision. If no, it’s a distraction regardless of who’s advocating for it.“My biggest lesson is to keep your vision, keep your first idea, and focus on solving the problem for the user,” Genovese says. “That’s the biggest problem when you grow. When you have paying customers, focus on them. Don’t focus on the investor, the CEO, the CTO, or the engineers. Focus on what makes the customer happy.”The hierarchy is clear. Users first. Everything else second. When that priority is inverted — when investor preferences, internal politics, or competitive anxiety drive decisions — products lose both focus and trust."
      },
      { type: "heading", text: "When to Rebuild Trust" },
      {
        type: "paragraph", text: "Products sometimes ship features that break user trust. The response from teams is often to move even faster, adding new capabilities to distract from the problems or patching issues with incremental fixes.Genovese advocates for a more radical approach: sometimes you need to throw everything away and start over.“Be bold enough to throw away what you’ve done and start from scratch,” he says. “I’ve seen products improve their design and structure when they started from scratch and rethought from the beginning what problem they’re actually solving. The product became much better.”This applies not just to technical architecture but to product positioning and user relationships. Once trust erodes past a certain point, patches and apologies don’t restore it. Users need to see a fundamental change that demonstrates you’ve understood what went wrong.“What was my initial idea for this product? Are we still solving that problem?” Genovese frames these as the essential questions. If the answer reveals you’ve drifted far from your original vision and users no longer trust what you’re building, starting fresh often makes more sense than trying to repair something fundamentally misaligned."
      },
    ],
  },
  {
    slug: "clarity-is-a-leadership-discipline",
    title: "Clarity Is a Leadership Discipline",
    excerpt:
      "In the ever-changing landscape of business, uncertainty is a constant companion.",
    image: "/media/image-4.webp",
    content: [
      {
        type: "paragraph", text: "In the ever-changing landscape of business, uncertainty is a constant companion. Markets fluctuate unpredictably, capital tightens in response to economic shifts, and competition intensifies as technology advances. In such a volatile environment, what separates the companies that thrive from those that fall behind isn’t just optimism or resilience—it’s clarity."
      },
      {
        type: "paragraph", text: "Clear leadership becomes an indispensable asset when the storm of uncertainty threatens to obscure the path ahead. The ability to maintain clarity in the face of complexity is what empowers leaders to make sound decisions, prioritize effectively, and guide their teams toward sustained success. It’s not about knowing all the answers, but about defining the right questions and staying focused on the core principles that drive the organization forward."
      },

      { type: "heading", text: "The Activity Trap" },
      { type: "paragraph", text: "As external pressure mounts, it’s easy for founders and leaders to fall into the activity trap. Faced with mounting uncertainty, many believe that moving faster or pivoting prematurely will mitigate risk and address challenges. However, speed without direction often leads to amplified confusion rather than progress.In such moments, founders may frantically chase new opportunities or shift focus, thinking that urgency will solve the problem. But without clarity, this rush leads to a fragmented strategy, where the team is pulled in too many directions. It’s not about doing more—it’s about doing the right things with a clear purpose. Leaders who lack clarity tend to engage in a flurry of activity, but they may not make significant progress on what truly matters." },

      { type: "heading", text: "Four Layers of Executive Clarity" },
      {
        type: "paragraph", text: "To combat the activity trap and drive meaningful results, executives must anchor themselves in four key layers of clarity:"
      },
      {
        type: "paragraph", text: "Strategic Clarity: The first layer is strategic clarity, which is about defining a singular problem to solve. Instead of being overwhelmed by numerous challenges, the company needs to be laser-focused on the core issue that will make the most significant impact. This means saying no to many things to say yes to the few that really matter. A clear strategic direction ensures the team works cohesively toward a shared goal, eliminating distractions and unnecessary complexity."
      },
      {
        type: "paragraph", text: "Product Clarity: The second layer is product clarity, which ensures that the company consistently reinforces its value proposition. A product can easily become diluted with too many features, varying use cases, or conflicting messaging. Product clarity focuses on ensuring that the product delivers a unified and focused value to the customer. It’s about keeping the promise simple and consistent. When the product’s value is clear and reinforced at every touchpoint, customers and employees alike understand what the company stands for."
      },
      {
        type: "paragraph", text: "Operational Clarity: The third layer is operational clarity, which involves establishing explicit decision ownership. When decision-making is ambiguous, progress slows and confusion spreads. Leaders must define who is responsible for what decisions, ensuring that there is no overlap or bottleneck. Clear decision rights lead to faster execution, improved accountability, and more effective problem-solving, particularly under pressure."
      },
      {
        type: "paragraph", text: "Narrative Clarity: The final layer is narrative clarity—the ability to tell a cohesive story across teams. Each department, team, and individual must understand how their efforts contribute to the company’s broader mission and vision. A cohesive narrative ensures that everyone is aligned, and that the company’s story is consistent, whether shared internally or externally. A unified narrative builds trust and purpose, ensuring that every team member feels part of something greater than themselves."
      },

      { type: "heading", text: "Clarity Under Pressure" },
      {
        type: "paragraph", text: "When external complexity increases, the first instinct may be to add more resources or change direction. However, the true test of leadership comes when internal complexity is reduced. Fewer priorities, tighter sequencing, and clear decision rights are critical to managing during uncertain times. In the face of complexity, leaders must simplify. This means narrowing focus, stripping away non-essential tasks, and concentrating on what will truly drive results.The most successful leaders are those who can reduce internal chaos in times of external pressure. They embrace the discipline of clarity, cutting through the noise, focusing the team on high-priority actions, and avoiding distractions that would diffuse their energy. By simplifying and focusing on fewer things, they not only maintain direction but also empower their teams to execute with precision."
      },
      { type: "heading", text: "Leadership as a Discipline of Narrowing Focus" },
      {
        type: "paragraph", text: "Leadership is the ability to narrow focus when everything around you seems to be expanding. As opportunities grow and markets shift, it’s tempting to cast a wider net. Yet, true leadership shines in moments when others are tempted to do more. A leader must resist the allure of unchecked expansion, focusing instead on what drives the business forward in a sustainable way. By refining and simplifying, leaders create clarity—an essential ingredient for long-term success."
      },
      {
        type: "paragraph", text: "A disciplined leader isn’t the one who moves the fastest or does the most, but the one who moves with purpose, guiding the organization through complexity by ensuring the path is clear. In a world full of distractions, clarity becomes a rare but valuable commodity, one that can make all the difference between thriving and simply surviving."
      },
    ],
  },
  {
    slug: "product-teams-misunderstand-users",
    title:
      "Marcello Genovese on Why Product Teams Misunderstand Their Users",
    excerpt:
      "Challenges product teams that skip user testing entirely, showing how building on unvalidated assumptions leads to costly rebuilds.",
    image: "/media/image-5.webp",
    content: [
      {
        type: "paragraph", text: "Product executive Marcello Genovese has watched countless digital products fail for the same preventable reason. Teams build elaborate features, chase vanity metrics, and polish interfaces while skipping the one step that matters most: actually testing with users."
      },
      {
        type: "paragraph", text: "“Whenever they didn’t test it out with the user,” Genovese says when asked about the earliest warning signs that a product team is building the wrong thing. His answer is immediate, unequivocal. Even when metrics look healthy, he argues, teams can be months into development before discovering their core assumptions were wrong."
      },
      {
        type: "paragraph", text: "Genovese brings an unconventional perspective to product strategy. Before entering the technology industry, he built his career in entertainment, performing as a wedding singer and DJ across Germany and Switzerland while still in his teens. That background taught him something most product leaders miss: understanding what an audience actually wants requires direct engagement, not guesswork from a distance."
      },
      {
        type: "paragraph", text: "“People misunderstand that nothing is as easy as it looks,” Genovese explains. “You still need to think through your product, and a good product strategy is always about the end user and how they’re going to use it.”"
      },

      { type: "heading", text: "The Prototype-First Philosophy" },
      { type: "paragraph", text: "Genovese’s approach diverges sharply from teams that spend months refining concepts before user contact. He advocates for rapid, stripped-down prototypes that prioritize function over form.“I test products with simple prototypes that may look ugly, but they have the functionality, and that helps,” he says. These rough versions serve a specific purpose: validating whether users actually want what the team thinks they want, before resources get committed.The method reflects hard-won lessons. Genovese started his first web hosting company before age 16, becoming one of Germany’s youngest entrepreneurs. Over the following years, he and business partner Stefan Graf launched multiple ventures, learning through trial and error which approaches actually worked.When pressed on when product intuition stops being enough and process needs to take over, Genovese’s answer centers on validation: “If you think through a product and you have an idea about how the user wants to use it, you need a process before building. You can start building without one, but then you risk building something the user won’t like.”" },

      { type: "heading", text: "When Metrics Lie" },
      {
        type: "paragraph", text: "Even experienced teams can be misled by seemingly positive signals. Genovese points to a common scenario: engagement numbers tick upward, retention looks stable, but something feels off. Teams often miss what’s happening beneath the surface:"
      },
      {
        type: "paragraph", text: "The problem compounds when internal stakeholders mistake polish for product-market fit, or when investor pressure pushes teams toward features that serve pitch decks better than end users."
      },
      {
        type: "paragraph", text: "His diagnosis of what separates successful platforms from those that burn out after early traction returns to the same principle: “If you build a product that solves a real problem for the user, then you’re solving something important. Build for the user, not for the technology or fancy interactions or excessive functions. That makes the difference.”"
      },

      { type: "heading", text: "The Vision Drift Problem" },
      {
        type: "paragraph", text: "Genovese reserves particular criticism for how product teams lose focus as they scale. The pattern is familiar: a product gains momentum with a clear value proposition, then gradually morphs into something bloated and confused as different stakeholders impose their preferences.“Teams should keep their vision,” Genovese argues. “Don’t just build for investors or others in the company. Keep the vision and the idea for solving the problem for the user. Always focus on the first idea you had.”This vision drift often stems from well-intentioned attempts to satisfy multiple constituencies. Investors want features that signal growth. Executives want capabilities that match competitor offerings. Engineering teams want to implement interesting technical solutions. Meanwhile, actual users get deprioritized.“You see products that start strong and get traction, then they try to fulfill investor needs or the CEO’s wishes. You should keep your vision and what you stand for, not build a product that does everything.”"
      },
      { type: "heading", text: "Rebuilding From Scratch" },
      {
        type: "paragraph", text: "When product leadership goes wrong, Genovese offers advice that many teams resist: sometimes the best path forward is starting over completely.“Be bold enough to throw away what you’ve done and start from scratch,” he says. His reasoning is pragmatic rather than dramatic. When a product accumulates layers of features built on faulty assumptions, incremental fixes often prove more expensive than a clean rebuild informed by actual user research.“I’ve seen products improve their design and structure when they started from scratch and rethought from the beginning what problem they’re actually solving. The product became much better.”"
      },
      {
        type: "paragraph", text: "This willingness to discard sunk costs distinguishes effective product leaders from those who optimize their way into irrelevance. Genovese frames it as the fundamental question teams should ask themselves: “What was my initial vision for this product? What was my idea? Are we focusing on solving a problem for the consumer, or just fulfilling wishes from people who don’t actually use the product?”"
      },
      { type: "heading", text: "Talk To Your Users" },
      {
        type: "paragraph", text: "Genovese’s advice for product leaders navigating uncertainty rather than momentum is direct: “Talk to your users, do reviews, run user testing. There are plenty of testing platforms out there.”He even advocates for deliberately seeking out users who don’t fit the target demographic. “Even if you can’t find the right user for your product to test it, sometimes the least likely person helps make your product stronger and gives you a different viewpoint.”The broader principle extends beyond individual features to organizational culture. Genovese identifies the user as his north star. “The person using the product is what matters most. You should keep the company mission and build a product that solves a problem, but I would never change a product just because an investor wants something. If it’s stupid, I don’t care who’s making money.”"
      },
      { type: "heading", text: "Technology Should Serve Experience" },
      {
        type: "paragraph", text: "On questions about AI integration and emerging technology, Genovese maintains his user-first framework. He sees AI as neither overused nor underutilized, but frequently misapplied.“AI isn’t over-applied right now in products. It’s more about doing it the right way. If AI doesn’t solve a problem or help the user, and it’s just a button that says ‘do this with AI,’ it doesn’t make sense. But if it solves a problem and gives additional help, then it’s useful.”This extends to his broader philosophy on technology selection: “Technology should support the product. Everything is possible. We have enough computing power and everything needed to make a great product. For me, it’s always about the user interface. It’s about speed. It has to react immediately, not have long load times just because of the technology.”"
      },
      {
        type: "paragraph", text: "Genovese’s entertainment background resurfaces in how he frames product philosophy. Just as performers must read their audience in real time, product teams must remain attuned to how users actually experience their work. “User experience is key in a product. If the user experience is good, then you can use any technology around it.”"
      },
      { type: "paragraph", text: "Product teams rarely fail from a lack of technical capability or insufficient features. They fail, Genovese argues, because they never validated whether anyone wanted what they built. The solution isn’t complicated. It just requires doing the unglamorous work of testing rough prototypes with real users before committing to months of development.As Genovese puts it: “Talk with your user, talk with your customer. Find out what they need, what they want, what they don’t like.”"
      },
    ],
  },
  {
    slug: "balance-speed-trust-product-development-2",
    title: "From Product to Scale: The Structural Path Most Founders Skip",
    excerpt:
      "In the startup world, growth is often mistaken for acceleration and it's easy to think speed alone drives success.",
    image: "/media/image-6.webp",
    content: [
      {
        type: "paragraph", text: "In the startup world, growth is often mistaken for acceleration. It’s easy to think that growth happens through constant hustle and constant activity. However, true growth is about sequencing—doing the right things in the right order. The transition from building a product to scaling a business exposes deep structural gaps that many founders overlook or underestimate. Growth doesn’t happen by simply speeding up; it happens by aligning key systems, strategies, and structures at every stage of the company’s journey."
      },
      {
        type: "paragraph", text: "Scaling is not just about growing fast; it’s about growing intelligently. Many founders, especially in the early stages, skip critical structural shifts required to scale effectively. This lack of preparation often leads to stalled growth, inefficiencies, or outright failure when it comes time to scale."
      },
      {
        type: "paragraph", text: "Let’s break down the four key stages of a company’s growth path from product development to scalable success:"
      },

      { type: "heading", text: "Stage 1: Validation" },
      { type: "paragraph", text: "At the validation stage, scrappy execution and learning velocity are paramount. This is the phase where you’re testing assumptions, refining your product, and getting feedback from early adopters. There’s a lot of trial and error, and the focus is on experimenting and discovering what works.In this stage, resources are often limited, and the strategy is driven by quick iterations. Founders and teams may take shortcuts or use makeshift solutions to validate ideas rapidly. While this “scrappy” approach is necessary to get initial feedback and prove the concept, it also creates a volatile foundation. Systems are unstructured, and decision-making is often reactive. But that’s okay for this stage. The goal is to validate the concept—not to perfect it.What founders need to recognize here is that the momentum of this stage is valuable, but it won’t sustain the company in the long term. There’s a fine line between testing and structuring, and the startup must be mindful of transitioning to the next stage before the gaps become critical." },

      { type: "heading", text: "Stage 2: Confirmation" },
      {
        type: "paragraph", text: "At this stage, retention becomes the key indicator of success, not just funding or market buzz. Funding might provide the resources to expand, but retention shows you’ve truly found product-market fit. It’s not enough for customers to sign up—they must stick around and use your product over time."
      },
      {
        type: "paragraph", text: "Retention is the ultimate proof of product-market fit. It’s the signal that your product is not just solving a problem for users, but solving it in a way that keeps them coming back. When a company enters the confirmation stage, there is less room for ambiguity. If users are engaging with your product repeatedly, it indicates that you’ve cracked the formula and can start scaling."
      },
      {
        type: "paragraph", text: "During this phase, companies might still experience some turbulence, but the process is now focused on stabilizing and confirming the business’s core offering. It’s time to sharpen the value proposition, refine customer interactions, and continuously track and improve retention metrics."
      },

      { type: "heading", text: "Stage 3: Infrastructure Alignment" },
      {
        type: "paragraph", text: "Once confirmation is in place, it’s time to align your infrastructure with the long-term ambition of the company. This is the stage where most early-stage founders fall short. They try to scale before their internal systems, tools, and teams are ready. If you skip this stage, velocity decays—meaning, growth slows down despite seemingly having the resources or market demand to accelerate.Infrastructure alignment is about setting up scalable systems that can support the future vision. This includes creating clear workflows, establishing operational systems, and implementing the right technology stacks that will scale as you grow. The goal is to build a foundation that allows for efficient growth rather than playing catch-up later."
      },
      {
        type: "paragraph", text: "The risk of not aligning infrastructure is that the company will end up fighting fires and creating workarounds as it grows, which increases friction across the organization. The processes that worked in the validation stage may no longer be viable when the company needs to manage more customers, data, or teams. This is when scaling starts to feel like an uphill battle. Without the proper systems in place, progress becomes inconsistent, and growth feels stunted."
      },
      { type: "heading", text: "Stage 4: Operational Maturity" },
      {
        type: "paragraph", text: "The final stage is operational maturity, where the company transitions from improvisation to structure. This stage is marked by the adoption of clear decision frameworks and the replacement of escalation loops with efficient, autonomous decision-making processes.At this point, the company should have well-defined processes, a strong organizational structure, and clear decision rights. Teams should be aligned on their roles and responsibilities, and processes should be streamlined to reduce bottlenecks.In this stage, architecture—whether in terms of company structure, product architecture, or technology—is no longer a patchwork of quick solutions but a solid and intentional design that can withstand scaling. Instead of making quick decisions on the fly, leadership has created a strong framework for the business to operate within, and teams can execute without needing constant input from the top."
      },
      { type: "heading", text: "Scale is Systematic, Intentional, and Durable" },
      {
        type: "paragraph", text: "The key takeaway here is that scale is not accidental. It’s not about throwing more resources at a problem or hoping for growth to happen. Scaling is systematic, intentional, and durable. When you reach the operational maturity stage, you’re no longer growing just because you can; you’re growing because you’ve built the systems and frameworks that allow for consistent, sustainable growth."
      },
      {
        type: "paragraph", text: "True scale happens when the foundation—be it product, infrastructure, or operations—is designed to support long-term ambitions rather than just immediate needs. It’s about sequencing your growth steps, focusing on foundational elements, and allowing those elements to support a flourishing business in the future."
      },
      { type: "heading", text: "Conclusion" },
      {
        type: "paragraph", text: "Many founders focus so much on product and initial growth that they neglect the structural elements required for true scale. By focusing on validation, confirmation, infrastructure alignment, and operational maturity, founders can ensure they are not just accelerating, but growing sustainably. The transition from building a product to scaling a business is not linear, and skipping these essential steps can lead to gaps in your company’s ability to thrive as it grows."
      },
    ],
  },
];

export function getInsightBySlug(slug: string): Insight | undefined {
  return insights.find((i) => i.slug === slug);
}
