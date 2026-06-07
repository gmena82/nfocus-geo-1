window.REPORT_DATA = {
  "summary": {
    "baseline": "63/100, Mixed",
    "nfPromptCount": 11,
    "googleQueryCount": 20,
    "surfaceCount": 6,
    "riskCount": 8,
    "ticketCount": 11,
    "sourceQualityCount": 11,
    "competitorCount": 47
  },
  "prompts": [
    {
      "prompt_id": "NF-P01",
      "prompt_text": "What is TraxSolutions by nFocus Solutions?",
      "prompt_category": "branded_entity",
      "buyer_segment": "nonprofit; public sector; youth/community programs",
      "persona": "operator; executive; evaluator",
      "use_case": "entity_recognition",
      "funnel_stage": "awareness",
      "geography": "US",
      "language": "en",
      "intent": "branded_fact",
      "product_or_service_line": "TraxSolutions suite",
      "competitor_set": "Salesforce Nonprofit Cloud; Apricot/Bonterra; CaseWorthy",
      "risk_type": "entity_confusion",
      "expected_ideal_answer": "Correctly identifies TraxSolutions as nFocus nonprofit/public-sector program, participant, case-management, attendance, registration, and outcome-measurement software.",
      "surfaces_or_layer": "ChatGPT Search; Gemini Free/Flash; Perplexity; Brave Search; Copilot/Bing",
      "run_condition": "selected Day 1 answer-surface rows",
      "repeat_run_group": "selected_batch_02",
      "confidence_target": "high",
      "calibration_status": "complete",
      "notes": "Strong entity-recognition anchor."
    },
    {
      "prompt_id": "NF-P02",
      "prompt_text": "What does TraxSolutions do, who is it for, and where is nFocus Solutions based? Include sources.",
      "prompt_category": "branded_fact_check",
      "buyer_segment": "nonprofit; public sector; youth/community programs",
      "persona": "operator; executive; evaluator",
      "use_case": "fact_verification",
      "funnel_stage": "awareness",
      "geography": "US",
      "language": "en",
      "intent": "branded_fact",
      "product_or_service_line": "TraxSolutions suite",
      "competitor_set": "none primary",
      "risk_type": "hq_address_entity_risk",
      "expected_ideal_answer": "Correct product, audience, HQ/entity details, and source citations with verification caveats.",
      "surfaces_or_layer": "ChatGPT Search; Gemini Free/Flash; Perplexity; Brave Search; Copilot/Bing",
      "run_condition": "selected Day 1 answer-surface rows",
      "repeat_run_group": "selected_batch_02",
      "confidence_target": "medium",
      "calibration_status": "complete",
      "notes": "Product facts strong; HQ/address details require official verification."
    },
    {
      "prompt_id": "NF-P04",
      "prompt_text": "Best nonprofit program management software for tracking participants, attendance, and outcomes.",
      "prompt_category": "category_discovery",
      "buyer_segment": "nonprofit; youth; public sector",
      "persona": "program director; operations leader; grants/reporting lead",
      "use_case": "program_management_shortlist",
      "funnel_stage": "consideration",
      "geography": "US",
      "language": "en",
      "intent": "category_discovery",
      "product_or_service_line": "program management; attendance; outcomes",
      "competitor_set": "Bonterra/Apricot; Salesforce; Hibox; LiveImpact; OneTap",
      "risk_type": "shortlist_risk",
      "expected_ideal_answer": "TraxSolutions is mentioned or shortlisted with accurate participant/attendance/outcome fit.",
      "surfaces_or_layer": "ChatGPT Search; Gemini Free/Flash; Perplexity; Brave Search; Copilot/Bing; Google G20-03",
      "run_condition": "selected rows plus mapped Google query",
      "repeat_run_group": "selected_batch_02",
      "confidence_target": "high",
      "calibration_status": "complete",
      "notes": "Mixed but important category prompt."
    },
    {
      "prompt_id": "NF-P05",
      "prompt_text": "Best case management software for nonprofit human services organizations.",
      "prompt_category": "category_discovery",
      "buyer_segment": "nonprofit human services",
      "persona": "case manager; program director; operations leader",
      "use_case": "case_management_shortlist",
      "funnel_stage": "consideration",
      "geography": "US",
      "language": "en",
      "intent": "category_discovery",
      "product_or_service_line": "case management",
      "competitor_set": "CaseWorthy; Bonterra Apricot; Casebook; Salesforce; PlanStreet",
      "risk_type": "category_absence",
      "expected_ideal_answer": "TraxSolutions appears for nonprofit/human-services case management or absence is documented.",
      "surfaces_or_layer": "ChatGPT Search; Gemini Free/Flash; Perplexity; Brave Search; Copilot/Bing; Google G20-02",
      "run_condition": "selected rows plus mapped Google query",
      "repeat_run_group": "selected_batch_02",
      "confidence_target": "high",
      "calibration_status": "complete",
      "notes": "Broad case-management weakness."
    },
    {
      "prompt_id": "NF-P06",
      "prompt_text": "Best outcome measurement software for nonprofits and public sector programs.",
      "prompt_category": "category_discovery",
      "buyer_segment": "nonprofit; public sector; funder-reporting programs",
      "persona": "evaluation lead; grants lead; executive",
      "use_case": "outcome_measurement_shortlist",
      "funnel_stage": "consideration",
      "geography": "US",
      "language": "en",
      "intent": "category_discovery",
      "product_or_service_line": "outcome measurement; impact reporting",
      "competitor_set": "Clear Impact; Bonterra; LiveImpact; SureImpact",
      "risk_type": "shortlist_risk",
      "expected_ideal_answer": "TraxSolutions appears with outcome-measurement positioning and useful sources.",
      "surfaces_or_layer": "ChatGPT Search; Gemini Free/Flash; Perplexity; Brave Search; Copilot/Bing; Google G20-05",
      "run_condition": "selected rows plus mapped Google query",
      "repeat_run_group": "selected_batch_02",
      "confidence_target": "high",
      "calibration_status": "complete",
      "notes": "Owned outcome-measurement source lane is one of the strongest."
    },
    {
      "prompt_id": "NF-P09",
      "prompt_text": "Compare TraxSolutions vs Salesforce Nonprofit Cloud for program management and outcome reporting. Who is each best for?",
      "prompt_category": "vendor_comparison",
      "buyer_segment": "nonprofit; public sector",
      "persona": "executive; operations leader; CRM/evaluation lead",
      "use_case": "comparison",
      "funnel_stage": "decision",
      "geography": "US",
      "language": "en",
      "intent": "comparison",
      "product_or_service_line": "program management; outcome reporting",
      "competitor_set": "Salesforce Nonprofit Cloud",
      "risk_type": "comparison_positioning",
      "expected_ideal_answer": "Accurate comparison; TraxSolutions differentiated for configurable program/outcome workflows without invented claims.",
      "surfaces_or_layer": "ChatGPT Search; Gemini Free/Flash; Perplexity; Brave Search; Copilot/Bing; Google G20-11",
      "run_condition": "selected rows plus mapped Google query",
      "repeat_run_group": "selected_batch_02",
      "confidence_target": "medium",
      "calibration_status": "complete",
      "notes": "Good comparison visibility; source support varies."
    },
    {
      "prompt_id": "NF-P10",
      "prompt_text": "Compare TraxSolutions vs CaseWorthy for nonprofit and human services case management.",
      "prompt_category": "vendor_comparison",
      "buyer_segment": "nonprofit human services",
      "persona": "case-management lead; operations leader",
      "use_case": "comparison",
      "funnel_stage": "decision",
      "geography": "US",
      "language": "en",
      "intent": "comparison",
      "product_or_service_line": "case management",
      "competitor_set": "CaseWorthy",
      "risk_type": "comparison_positioning",
      "expected_ideal_answer": "Accurate comparison with no invented pricing or features.",
      "surfaces_or_layer": "ChatGPT Search; Gemini Free/Flash; Perplexity; Brave Search; Copilot/Bing; Google G20-12",
      "run_condition": "selected rows plus mapped Google query",
      "repeat_run_group": "selected_batch_02",
      "confidence_target": "medium",
      "calibration_status": "complete",
      "notes": "Comparison visibility exists; source quality and buyer-risk facts need caveats."
    },
    {
      "prompt_id": "NF-P13",
      "prompt_text": "What are the best alternatives to Salesforce Nonprofit Cloud for nonprofits that need program management and outcome tracking?",
      "prompt_category": "alternative",
      "buyer_segment": "nonprofit; public sector",
      "persona": "executive; operations leader; Salesforce evaluator",
      "use_case": "alternative_shortlist",
      "funnel_stage": "decision",
      "geography": "US",
      "language": "en",
      "intent": "alternative",
      "product_or_service_line": "program management; outcome tracking",
      "competitor_set": "Salesforce Nonprofit Cloud; Bonterra; CaseWorthy; Neon CRM; LiveImpact",
      "risk_type": "alternative_absence",
      "expected_ideal_answer": "TraxSolutions appears as a relevant alternative or absence is documented.",
      "surfaces_or_layer": "ChatGPT Search; Gemini Free/Flash; Perplexity; Brave Search; Copilot/Bing; Google G20-15",
      "run_condition": "selected rows plus mapped Google query",
      "repeat_run_group": "selected_batch_02",
      "confidence_target": "high",
      "calibration_status": "complete",
      "notes": "High-value interception gap."
    },
    {
      "prompt_id": "NF-P20",
      "prompt_text": "Find evidence that TraxSolutions has helped nonprofits or public sector organizations measure impact. Include sources.",
      "prompt_category": "proof",
      "buyer_segment": "nonprofit; public sector",
      "persona": "executive; evaluator; grants lead",
      "use_case": "proof_validation",
      "funnel_stage": "decision",
      "geography": "US",
      "language": "en",
      "intent": "proof_retrieval",
      "product_or_service_line": "impact measurement; case studies",
      "competitor_set": "SureImpact; Clear Impact; Bonterra; Salesforce",
      "risk_type": "proof_verification",
      "expected_ideal_answer": "Cites owned impact studies, customer stories, PDFs, or credible third-party proof with verification caveats.",
      "surfaces_or_layer": "ChatGPT Search; Gemini Free/Flash; Perplexity; Brave Search; Copilot/Bing; Google G20-18",
      "run_condition": "selected rows plus mapped Google query",
      "repeat_run_group": "selected_batch_02",
      "confidence_target": "high",
      "calibration_status": "complete",
      "notes": "Strong owned proof lane; named customers/outcomes still require verification."
    },
    {
      "prompt_id": "NF-P22",
      "prompt_text": "Does TraxSolutions publish pricing? What implementation, security, integration, and support information is available?",
      "prompt_category": "risk_fact_check",
      "buyer_segment": "nonprofit; public sector",
      "persona": "procurement; IT; security; executive",
      "use_case": "buyer_risk_fact_check",
      "funnel_stage": "decision",
      "geography": "US",
      "language": "en",
      "intent": "risk_check",
      "product_or_service_line": "pricing; implementation; security; integrations/API; support",
      "competitor_set": "wrong-entity sources; third-party directories",
      "risk_type": "factual_risk",
      "expected_ideal_answer": "No hallucinated pricing; correctly identifies gaps if not public; all sensitive facts treated as unverified until official approval.",
      "surfaces_or_layer": "ChatGPT Search; Gemini Free/Flash; Perplexity; Brave Search; Copilot/Bing; Google G20-20",
      "run_condition": "selected rows plus mapped Google query",
      "repeat_run_group": "selected_batch_02",
      "confidence_target": "high",
      "calibration_status": "complete",
      "notes": "Highest buyer-risk anchor."
    },
    {
      "prompt_id": "NF-P30",
      "prompt_text": "Which pages from nfocus.com should I read to evaluate TraxSolutions for nonprofit outcome measurement and case management?",
      "prompt_category": "source_quality",
      "buyer_segment": "nonprofit; public sector",
      "persona": "buyer researcher; analyst; evaluator",
      "use_case": "owned_source_routing",
      "funnel_stage": "consideration",
      "geography": "US",
      "language": "en",
      "intent": "source_discovery",
      "product_or_service_line": "owned source evaluation",
      "competitor_set": "none primary",
      "risk_type": "source_routing_gap",
      "expected_ideal_answer": "Recommends main page, case management, outcome measurement, online registration, impact studies, and product sheet.",
      "surfaces_or_layer": "ChatGPT Search; Gemini Free/Flash; Perplexity; Brave Search; Copilot/Bing",
      "run_condition": "selected Day 1 answer-surface rows",
      "repeat_run_group": "selected_batch_02",
      "confidence_target": "high",
      "calibration_status": "complete",
      "notes": "Measures owned-source routing quality."
    },
    {
      "prompt_id": "G20-01",
      "prompt_text": "best nonprofit case management software for outcome tracking",
      "prompt_category": "google_surface",
      "buyer_segment": "nonprofit human services",
      "persona": "case-management lead; evaluator",
      "use_case": "case_management_shortlist",
      "funnel_stage": "consideration",
      "geography": "US",
      "language": "en",
      "intent": "category_discovery",
      "product_or_service_line": "case management; outcome tracking",
      "competitor_set": "Bonterra; LiveImpact; CharityTracker; Casebook; Case Management Hub",
      "risk_type": "category_absence",
      "expected_ideal_answer": "TraxSolutions appears in AIO or owned result visibility is documented.",
      "surfaces_or_layer": "Google Search / AI Overview",
      "run_condition": "Ridgefield/Gladstone MO IP; signed-out visible where shown; desktop Chrome",
      "repeat_run_group": "google_20",
      "confidence_target": "high",
      "calibration_status": "complete",
      "notes": "Competitor-dominated; nFocus page-2 owned result only."
    },
    {
      "prompt_id": "G20-02",
      "prompt_text": "best nonprofit human services case management software",
      "prompt_category": "google_surface",
      "buyer_segment": "nonprofit human services",
      "persona": "case-management lead; operations leader",
      "use_case": "case_management_shortlist",
      "funnel_stage": "consideration",
      "geography": "US",
      "language": "en",
      "intent": "category_discovery",
      "product_or_service_line": "human-services case management",
      "competitor_set": "Case Management Hub; Bonterra; extendedReach; Casebook; CharityTracker",
      "risk_type": "category_absence",
      "expected_ideal_answer": "TraxSolutions appears or absence is documented.",
      "surfaces_or_layer": "Google Search / AI Overview",
      "run_condition": "Ridgefield/Gladstone MO IP; signed-out visible where shown; desktop Chrome",
      "repeat_run_group": "google_20",
      "confidence_target": "high",
      "calibration_status": "complete",
      "notes": "Visibility gap."
    },
    {
      "prompt_id": "G20-03",
      "prompt_text": "best nonprofit program management software for participant attendance and outcome tracking",
      "prompt_category": "google_surface",
      "buyer_segment": "nonprofit; youth; public sector",
      "persona": "program director; evaluation lead",
      "use_case": "program_management_shortlist",
      "funnel_stage": "consideration",
      "geography": "US",
      "language": "en",
      "intent": "category_discovery",
      "product_or_service_line": "participant management; attendance; outcomes",
      "competitor_set": "Salesforce; Bonterra; LiveImpact; Bloomerang; Hibox",
      "risk_type": "shortlist_risk",
      "expected_ideal_answer": "TraxSolutions appears with owned nFocus source cards.",
      "surfaces_or_layer": "Google Search / AI Overview",
      "run_condition": "Ridgefield/Gladstone MO IP; signed-out visible where shown; desktop Chrome",
      "repeat_run_group": "google_20",
      "confidence_target": "high",
      "calibration_status": "complete",
      "notes": "Strong positive owned-source visibility."
    },
    {
      "prompt_id": "G20-04",
      "prompt_text": "best nonprofit program management software participant tracking outcomes",
      "prompt_category": "google_surface",
      "buyer_segment": "nonprofit; youth; public sector",
      "persona": "program director; grants lead",
      "use_case": "program_management_shortlist",
      "funnel_stage": "consideration",
      "geography": "US",
      "language": "en",
      "intent": "category_discovery",
      "product_or_service_line": "participant tracking; outcomes",
      "competitor_set": "Hibox; Sopact; LiveImpact; Bonterra; Salesforce",
      "risk_type": "shortlist_risk",
      "expected_ideal_answer": "TraxSolutions recommended with owned nFocus source card.",
      "surfaces_or_layer": "Google Search / AI Overview",
      "run_condition": "Ridgefield/Gladstone MO IP; signed-out visible where shown; desktop Chrome",
      "repeat_run_group": "google_20",
      "confidence_target": "high",
      "calibration_status": "complete",
      "notes": "Strong positive owned-source visibility."
    },
    {
      "prompt_id": "G20-05",
      "prompt_text": "best outcome measurement software for nonprofits and public sector programs",
      "prompt_category": "google_surface",
      "buyer_segment": "nonprofit; public sector",
      "persona": "evaluation lead; executive",
      "use_case": "outcome_measurement_shortlist",
      "funnel_stage": "consideration",
      "geography": "US",
      "language": "en",
      "intent": "category_discovery",
      "product_or_service_line": "outcome measurement",
      "competitor_set": "Clear Impact; Bonterra; LiveImpact; SureImpact",
      "risk_type": "shortlist_risk",
      "expected_ideal_answer": "nFocus TraxSolutions named as strong choice and owned source visible.",
      "surfaces_or_layer": "Google Search / AI Overview",
      "run_condition": "Ridgefield/Gladstone MO IP; signed-out visible where shown; desktop Chrome",
      "repeat_run_group": "google_20",
      "confidence_target": "high",
      "calibration_status": "complete",
      "notes": "Strong positive lane."
    },
    {
      "prompt_id": "G20-06",
      "prompt_text": "best attendance tracking software for afterschool and youth development programs",
      "prompt_category": "google_surface",
      "buyer_segment": "youth; afterschool",
      "persona": "program director; operations lead",
      "use_case": "attendance_tracking_shortlist",
      "funnel_stage": "consideration",
      "geography": "US",
      "language": "en",
      "intent": "category_discovery",
      "product_or_service_line": "attendance tracking",
      "competitor_set": "youth/afterschool tools",
      "risk_type": "shortlist_risk",
      "expected_ideal_answer": "TraxSolutions appears for grant-funded/compliance-heavy fit or owned visibility is documented.",
      "surfaces_or_layer": "Google Search / AI Overview",
      "run_condition": "Ridgefield/Gladstone MO IP; signed-out visible where shown; desktop Chrome",
      "repeat_run_group": "google_20",
      "confidence_target": "medium",
      "calibration_status": "complete",
      "notes": "Mixed visibility."
    },
    {
      "prompt_id": "G20-07",
      "prompt_text": "best online registration software for nonprofit programs and community centers",
      "prompt_category": "google_surface",
      "buyer_segment": "nonprofit; community centers",
      "persona": "program administrator; operations lead",
      "use_case": "online_registration_shortlist",
      "funnel_stage": "consideration",
      "geography": "US",
      "language": "en",
      "intent": "category_discovery",
      "product_or_service_line": "online registration",
      "competitor_set": "Jumbula; Amilia; Zeffy; Givebutter; Guidebook; SimpleTix",
      "risk_type": "category_absence",
      "expected_ideal_answer": "TraxSolutions online registration appears or absence is documented.",
      "surfaces_or_layer": "Google Search / AI Overview",
      "run_condition": "Ridgefield/Gladstone MO IP; signed-out visible where shown; desktop Chrome",
      "repeat_run_group": "google_20",
      "confidence_target": "high",
      "calibration_status": "complete",
      "notes": "Visibility gap."
    },
    {
      "prompt_id": "G20-08",
      "prompt_text": "best software for youth development nonprofits attendance parent communication outcomes",
      "prompt_category": "google_surface",
      "buyer_segment": "youth development nonprofits",
      "persona": "program director; executive",
      "use_case": "youth_program_fit",
      "funnel_stage": "consideration",
      "geography": "US",
      "language": "en",
      "intent": "buyer_fit",
      "product_or_service_line": "youth development; attendance; parent communication; outcomes",
      "competitor_set": "youth-development software competitors",
      "risk_type": "shortlist_risk",
      "expected_ideal_answer": "TraxSolutions appears with owned nFocus youth-development/TraxTalk sources.",
      "surfaces_or_layer": "Google Search / AI Overview",
      "run_condition": "Ridgefield/Gladstone MO IP; signed-out visible where shown; desktop Chrome",
      "repeat_run_group": "google_20",
      "confidence_target": "high",
      "calibration_status": "complete",
      "notes": "Strong positive lane."
    },
    {
      "prompt_id": "G20-09",
      "prompt_text": "best community center software registration payments attendance reporting",
      "prompt_category": "google_surface",
      "buyer_segment": "community centers",
      "persona": "operations lead; program administrator",
      "use_case": "community_center_fit",
      "funnel_stage": "consideration",
      "geography": "US",
      "language": "en",
      "intent": "buyer_fit",
      "product_or_service_line": "registration; payments; attendance; reporting",
      "competitor_set": "CommunityPass; Amilia; RecDesk; CivicPlus; ACTIVE Net; MyRec",
      "risk_type": "category_absence",
      "expected_ideal_answer": "TraxSolutions appears or absence is documented.",
      "surfaces_or_layer": "Google Search / AI Overview",
      "run_condition": "Ridgefield/Gladstone MO IP; signed-out visible where shown; desktop Chrome",
      "repeat_run_group": "google_20",
      "confidence_target": "high",
      "calibration_status": "complete",
      "notes": "Visibility gap; parks/recreation platforms dominate."
    },
    {
      "prompt_id": "G20-10",
      "prompt_text": "best software for workforce development nonprofits case management measurable outcomes",
      "prompt_category": "google_surface",
      "buyer_segment": "workforce development nonprofits",
      "persona": "program director; grants/evaluation lead",
      "use_case": "workforce_program_fit",
      "funnel_stage": "consideration",
      "geography": "US",
      "language": "en",
      "intent": "buyer_fit",
      "product_or_service_line": "case management; measurable outcomes",
      "competitor_set": "workforce/case-management competitors",
      "risk_type": "source_routing_gap",
      "expected_ideal_answer": "nFocus appears as source/organic result or named recommendation.",
      "surfaces_or_layer": "Google Search / AI Overview",
      "run_condition": "Ridgefield/Gladstone MO IP; signed-out visible where shown; desktop Chrome",
      "repeat_run_group": "google_20",
      "confidence_target": "medium",
      "calibration_status": "complete",
      "notes": "Mixed; nFocus visible but named recommendations go to competitors."
    },
    {
      "prompt_id": "G20-11",
      "prompt_text": "TraxSolutions vs Salesforce Nonprofit Cloud program management outcome reporting",
      "prompt_category": "google_surface",
      "buyer_segment": "nonprofit; public sector",
      "persona": "executive; CRM/evaluation lead",
      "use_case": "comparison",
      "funnel_stage": "decision",
      "geography": "US",
      "language": "en",
      "intent": "comparison",
      "product_or_service_line": "program management; outcome reporting",
      "competitor_set": "Salesforce Nonprofit Cloud",
      "risk_type": "source_routing_gap",
      "expected_ideal_answer": "Direct comparison exists with accurate buyer-fit framing.",
      "surfaces_or_layer": "Google Search / AI Overview",
      "run_condition": "Ridgefield/Gladstone MO IP; signed-out visible where shown; desktop Chrome",
      "repeat_run_group": "google_20",
      "confidence_target": "medium",
      "calibration_status": "complete",
      "notes": "Comparison appears; owned source support limited."
    },
    {
      "prompt_id": "G20-12",
      "prompt_text": "TraxSolutions vs CaseWorthy nonprofit human services case management",
      "prompt_category": "google_surface",
      "buyer_segment": "nonprofit human services",
      "persona": "case-management lead; operations lead",
      "use_case": "comparison",
      "funnel_stage": "decision",
      "geography": "US",
      "language": "en",
      "intent": "comparison",
      "product_or_service_line": "case management",
      "competitor_set": "CaseWorthy",
      "risk_type": "comparison_positioning",
      "expected_ideal_answer": "Direct comparison appears with accurate buyer-fit framing.",
      "surfaces_or_layer": "Google Search / AI Overview",
      "run_condition": "Ridgefield/Gladstone MO IP; signed-out visible where shown; desktop Chrome",
      "repeat_run_group": "google_20",
      "confidence_target": "medium",
      "calibration_status": "complete",
      "notes": "Comparison appears."
    },
    {
      "prompt_id": "G20-13",
      "prompt_text": "TraxSolutions vs SureImpact outcome measurement case management",
      "prompt_category": "google_surface",
      "buyer_segment": "nonprofit; social-good providers",
      "persona": "evaluation lead; executive",
      "use_case": "comparison",
      "funnel_stage": "decision",
      "geography": "US",
      "language": "en",
      "intent": "comparison",
      "product_or_service_line": "outcome measurement; case management",
      "competitor_set": "SureImpact",
      "risk_type": "comparison_positioning",
      "expected_ideal_answer": "Strong direct comparison with owned nFocus sources.",
      "surfaces_or_layer": "Google Search / AI Overview",
      "run_condition": "Ridgefield/Gladstone MO IP; signed-out visible where shown; desktop Chrome",
      "repeat_run_group": "google_20",
      "confidence_target": "high",
      "calibration_status": "complete",
      "notes": "Strong comparison lane."
    },
    {
      "prompt_id": "G20-14",
      "prompt_text": "TraxSolutions vs Exponent Case Management nonprofits",
      "prompt_category": "google_surface",
      "buyer_segment": "nonprofit human services",
      "persona": "case-management lead; executive",
      "use_case": "comparison",
      "funnel_stage": "decision",
      "geography": "US",
      "language": "en",
      "intent": "comparison",
      "product_or_service_line": "case management",
      "competitor_set": "Exponent Case Management",
      "risk_type": "pricing_claim_risk",
      "expected_ideal_answer": "Comparison appears without unsafe pricing claims.",
      "surfaces_or_layer": "Google Search / AI Overview",
      "run_condition": "Ridgefield/Gladstone MO IP; signed-out visible where shown; desktop Chrome",
      "repeat_run_group": "google_20",
      "confidence_target": "medium",
      "calibration_status": "complete",
      "notes": "Client-usable with caution due risky pricing claims."
    },
    {
      "prompt_id": "G20-15",
      "prompt_text": "alternatives to Salesforce Nonprofit Cloud for program management outcome tracking",
      "prompt_category": "google_surface",
      "buyer_segment": "nonprofit; public sector",
      "persona": "executive; Salesforce evaluator",
      "use_case": "alternative_shortlist",
      "funnel_stage": "decision",
      "geography": "US",
      "language": "en",
      "intent": "alternative",
      "product_or_service_line": "program management; outcome tracking",
      "competitor_set": "Bonterra; CaseWorthy; Neon CRM; Microsoft Dynamics; LiveImpact",
      "risk_type": "alternative_absence",
      "expected_ideal_answer": "TraxSolutions appears as a relevant Salesforce alternative or absence is documented.",
      "surfaces_or_layer": "Google Search / AI Overview",
      "run_condition": "Ridgefield/Gladstone MO IP; signed-out visible where shown; desktop Chrome",
      "repeat_run_group": "google_20",
      "confidence_target": "high",
      "calibration_status": "complete",
      "notes": "Visibility gap."
    },
    {
      "prompt_id": "G20-16",
      "prompt_text": "alternatives to CaseWorthy for nonprofit case management",
      "prompt_category": "google_surface",
      "buyer_segment": "nonprofit human services",
      "persona": "case-management lead; operations lead",
      "use_case": "alternative_shortlist",
      "funnel_stage": "decision",
      "geography": "US",
      "language": "en",
      "intent": "alternative",
      "product_or_service_line": "case management",
      "competitor_set": "LiveImpact; Bonterra Apricot; CharityTracker; InfoFlo; Casebook",
      "risk_type": "alternative_absence",
      "expected_ideal_answer": "TraxSolutions appears as a relevant CaseWorthy alternative or absence is documented.",
      "surfaces_or_layer": "Google Search / AI Overview",
      "run_condition": "Ridgefield/Gladstone MO IP; signed-out visible where shown; desktop Chrome",
      "repeat_run_group": "google_20",
      "confidence_target": "high",
      "calibration_status": "complete",
      "notes": "Visibility gap."
    },
    {
      "prompt_id": "G20-17",
      "prompt_text": "alternatives to spreadsheets for nonprofit attendance participant tracking grant reporting",
      "prompt_category": "google_surface",
      "buyer_segment": "nonprofit; grant-funded programs",
      "persona": "operations lead; grants lead",
      "use_case": "spreadsheet_replacement",
      "funnel_stage": "decision",
      "geography": "US",
      "language": "en",
      "intent": "alternative",
      "product_or_service_line": "attendance; participant tracking; grant reporting",
      "competitor_set": "Airtable; Grist; Notion; Submittable; Foundant; Instrumentl; Salesforce; Bonterra",
      "risk_type": "alternative_absence",
      "expected_ideal_answer": "TraxSolutions appears as a spreadsheet replacement or absence is documented.",
      "surfaces_or_layer": "Google Search / AI Overview",
      "run_condition": "Ridgefield/Gladstone MO IP; signed-out visible where shown; desktop Chrome",
      "repeat_run_group": "google_20",
      "confidence_target": "high",
      "calibration_status": "complete",
      "notes": "Visibility gap."
    },
    {
      "prompt_id": "G20-18",
      "prompt_text": "TraxSolutions impact measurement case studies nonprofit public sector",
      "prompt_category": "google_surface",
      "buyer_segment": "nonprofit; public sector",
      "persona": "executive; evaluator; grants lead",
      "use_case": "proof_validation",
      "funnel_stage": "decision",
      "geography": "US",
      "language": "en",
      "intent": "proof_retrieval",
      "product_or_service_line": "impact measurement case studies",
      "competitor_set": "none primary",
      "risk_type": "proof_verification",
      "expected_ideal_answer": "Owned nFocus proof/case-study visibility appears and claims remain verification-gated.",
      "surfaces_or_layer": "Google Search / AI Overview",
      "run_condition": "Ridgefield/Gladstone MO IP; signed-out visible where shown; desktop Chrome",
      "repeat_run_group": "google_20",
      "confidence_target": "high",
      "calibration_status": "complete",
      "notes": "Strong owned proof visibility."
    },
    {
      "prompt_id": "G20-19",
      "prompt_text": "TraxSolutions customer examples case studies Boys and Girls Clubs United Way Salvation Army",
      "prompt_category": "google_surface",
      "buyer_segment": "nonprofit; public sector",
      "persona": "executive; evaluator",
      "use_case": "proof_validation",
      "funnel_stage": "decision",
      "geography": "US",
      "language": "en",
      "intent": "proof_retrieval",
      "product_or_service_line": "customer examples; case studies",
      "competitor_set": "none primary",
      "risk_type": "proof_gap",
      "expected_ideal_answer": "AIO appears or no-AIO/thin-SERP finding is documented.",
      "surfaces_or_layer": "Google Search / AI Overview",
      "run_condition": "Ridgefield/Gladstone MO IP; signed-out visible where shown; desktop Chrome",
      "repeat_run_group": "google_20",
      "confidence_target": "medium",
      "calibration_status": "complete",
      "notes": "No AIO visible; use as thin-SERP proof gap, not AIO evidence."
    },
    {
      "prompt_id": "G20-20",
      "prompt_text": "TraxSolutions pricing implementation integrations API security compliance",
      "prompt_category": "google_surface",
      "buyer_segment": "nonprofit; public sector",
      "persona": "procurement; IT; security; executive",
      "use_case": "buyer_risk_fact_check",
      "funnel_stage": "decision",
      "geography": "US",
      "language": "en",
      "intent": "risk_check",
      "product_or_service_line": "pricing; implementation; API; security; compliance",
      "competitor_set": "Trax Technologies; SecurityTrax; trax.solutions; directories",
      "risk_type": "factual_risk",
      "expected_ideal_answer": "Pricing/security/compliance claims are either answered from official sources or marked unverified; wrong-entity risk is avoided.",
      "surfaces_or_layer": "Google Search / AI Overview",
      "run_condition": "Ridgefield/Gladstone MO IP; signed-out visible where shown; desktop Chrome",
      "repeat_run_group": "google_20",
      "confidence_target": "high",
      "calibration_status": "complete",
      "notes": "Highest Google factual-risk/entity-confusion anchor."
    }
  ],
  "confidence": [
    {
      "finding_id": "CL-001",
      "finding": "TraxSolutions has strong branded/entity recognition.",
      "primary_evidence": "NF-P01 and NF-P02 across selected ChatGPT Search, Gemini, Perplexity, Brave Search, and Copilot/Bing rows; scoring summary entity confidence 8/10",
      "confidence_label": "high",
      "why": "Repeated across multiple selected answer surfaces with evidence-grade artifacts.",
      "client_reporting_language": "Repeated selected-surface evidence shows strong branded/entity recognition."
    },
    {
      "finding_id": "CL-002",
      "finding": "Broad case-management and generic category visibility is inconsistent and competitor-led.",
      "primary_evidence": "NF-P05 selected rows; G20-01; G20-02; scorecard category visibility 8/15",
      "confidence_label": "high",
      "why": "Appears across multiple surfaces and Google expanded rows.",
      "client_reporting_language": "Selected-surface evidence shows broad category prompts are still competitor-led."
    },
    {
      "finding_id": "CL-003",
      "finding": "Outcome measurement, youth, attendance, and proof lanes are stronger.",
      "primary_evidence": "NF-P04; NF-P06; NF-P20; G20-03; G20-04; G20-05; G20-08; G20-18",
      "confidence_label": "high",
      "why": "Positive evidence repeats in Google and answer surfaces, especially where owned nFocus source language aligns.",
      "client_reporting_language": "The strongest current lanes are youth, attendance, outcome measurement, and proof retrieval."
    },
    {
      "finding_id": "CL-004",
      "finding": "Alternatives/interception prompts need work.",
      "primary_evidence": "NF-P13; G20-15; G20-16; G20-17",
      "confidence_label": "high",
      "why": "High-intent alternatives prompts repeatedly omit or weaken TraxSolutions.",
      "client_reporting_language": "Alternative-led buyer prompts are a priority growth opportunity."
    },
    {
      "finding_id": "CL-005",
      "finding": "Buyer-risk fact gaps cause answer engines to fill details from weak, mixed, third-party, or wrong-entity sources.",
      "primary_evidence": "NF-P22 rows; G20-20; G20-14 caveat; factual-risk count 14",
      "confidence_label": "high",
      "why": "Risk appears across selected surfaces and Google expanded evidence.",
      "client_reporting_language": "Buyer-risk rows are answer-surface risk evidence, not verified product truth."
    },
    {
      "finding_id": "CL-006",
      "finding": "Owned nFocus source routing matters and correlates with stronger rows.",
      "primary_evidence": "NF-P20; NF-P30; G20-03; G20-04; G20-05; G20-08; source recon",
      "confidence_label": "high",
      "why": "Strong rows often show owned nFocus pages or product/PDF/proof sources.",
      "client_reporting_language": "Owned source cleanup should improve recommendation consistency and factual control."
    },
    {
      "finding_id": "CL-007",
      "finding": "Third-party review/profile depth is thin/noisy.",
      "primary_evidence": "Source recon G2 finding; review/trust score 4/8",
      "confidence_label": "medium",
      "why": "Supported by source recon and scorecard, but not fully benchmarked against every competitor profile.",
      "client_reporting_language": "Third-party validation appears thinner than the category needs for decision-stage confidence."
    },
    {
      "finding_id": "CL-008",
      "finding": "MoneyTrax/payment routing is a narrow technical retrieval issue.",
      "primary_evidence": "technical_baseline_summary.md; day1_confirmed_risks_and_fix_backlog.csv NF-R001",
      "confidence_label": "high",
      "why": "Direct HTTP status evidence: /moneytrax/ returned 404 while /traxsolutions/payment-processing/ returned 200.",
      "client_reporting_language": "A payment-related page path creates routing/retrieval friction; do not frame as a broad payment-product issue."
    },
    {
      "finding_id": "CL-009",
      "finding": "API corroboration remains absent from Day 1 scope.",
      "primary_evidence": "Scoring summary; retest plan; NF-R008",
      "confidence_label": "high",
      "why": "Documented exclusion; no approved API path was available.",
      "client_reporting_language": "API corroboration was not run and should remain separate unless approved."
    },
    {
      "finding_id": "CL-010",
      "finding": "Brave Search results do not establish Brave Leo/browser-agent behavior.",
      "primary_evidence": "Appendix; QA ledger BRAVE-LEO-SURFACE-CHECK",
      "confidence_label": "high",
      "why": "Browser-agent surface was unavailable.",
      "client_reporting_language": "Brave Search is not Brave Leo/browser-agent coverage."
    }
  ],
  "sources": [
    {
      "source_group": "Main TraxSolutions page and owned module pages",
      "source_type": "owned_site",
      "observed_in": "NF-P01; NF-P02; NF-P30; G20 positive rows; source recon",
      "score": "4",
      "label": "strong",
      "rationale": "Owned pages are discoverable and useful, but buyer-risk and comparison facts are not concentrated enough.",
      "remediation_priority": "high",
      "next_action": "Add answer-first product narrative, buyer-risk FAQ, comparison/category sections, and approved proof blocks."
    },
    {
      "source_group": "Outcome Measurement Toolkit and impact/proof pages",
      "source_type": "owned_site",
      "observed_in": "NF-P20; G20-05; G20-18; source recon",
      "score": "4",
      "label": "strong",
      "rationale": "Strong topical proof and outcome-measurement support; sourceable but scattered.",
      "remediation_priority": "high",
      "next_action": "Consolidate approved proof on main product page and link clearly to impact studies."
    },
    {
      "source_group": "TraxSolutions overview PDF",
      "source_type": "owned_asset_pdf",
      "observed_in": "NF-P20; NF-P30; source recon; technical baseline",
      "score": "3",
      "label": "adequate",
      "rationale": "Useful claims and proof, but PDF/date/version and extraction readiness require verification.",
      "remediation_priority": "medium",
      "next_action": "Verify PDF URL/date/version; convert core proof into visible HTML."
    },
    {
      "source_group": "nFocus About/customer proof content",
      "source_type": "owned_site",
      "observed_in": "source recon",
      "score": "3",
      "label": "adequate",
      "rationale": "Contains useful customer/proof detail but is not centered on the product evaluation path.",
      "remediation_priority": "medium",
      "next_action": "Pull approved customer examples into product page or case-study hub."
    },
    {
      "source_group": "G2 TraxSolutions profile",
      "source_type": "review_platform",
      "observed_in": "source recon; scorecard review/trust",
      "score": "2",
      "label": "weak",
      "rationale": "Entity/category signal exists, but review depth is thin and G2 says there is not enough review insight.",
      "remediation_priority": "high",
      "next_action": "Claim/update profile if needed and create review-generation plan."
    },
    {
      "source_group": "Capterra/SoftwareWorld/SourceForge/Slashdot-style directories",
      "source_type": "directory_or_review_platform",
      "observed_in": "NF-P22; Copilot/Bing; Perplexity; Brave Search",
      "score": "2",
      "label": "weak",
      "rationale": "These can appear in buyer-risk rows but may carry unverified pricing/security/support claims.",
      "remediation_priority": "high",
      "next_action": "Replace reliance with official buyer-risk content and correct directory facts where possible."
    },
    {
      "source_group": "Highperformr/ZoomInfo/LinkedIn third-party company profiles",
      "source_type": "third_party_profile",
      "observed_in": "NF-P02; NF-P30; Perplexity/Gemini source routing",
      "score": "2",
      "label": "weak",
      "rationale": "Useful entity clues but not safe for HQ/address or product truth without verification.",
      "remediation_priority": "medium",
      "next_action": "Verify and correct entity details; strengthen owned sources."
    },
    {
      "source_group": "Competitor-owned or competitor-led category pages",
      "source_type": "competitor_controlled",
      "observed_in": "G20 weak rows; category and alternatives prompts",
      "score": "1",
      "label": "harmful_or_competitive",
      "rationale": "Competitors frame the category and alternatives prompts more strongly than TraxSolutions.",
      "remediation_priority": "high",
      "next_action": "Build factual category and comparison pages without unsupported superiority claims."
    },
    {
      "source_group": "Wrong-entity Trax/TraxSolutions sources",
      "source_type": "wrong_entity_source",
      "observed_in": "G20-20; NF-P22 Perplexity/source-risk rows",
      "score": "1",
      "label": "harmful",
      "rationale": "Wrong-entity sources create pricing/security/compliance confusion.",
      "remediation_priority": "critical",
      "next_action": "Add entity-disambiguation language and official buyer-risk facts; monitor retest rows."
    },
    {
      "source_group": "Google Search / AI Overview source cards",
      "source_type": "search_surface_source",
      "observed_in": "G20-01 through G20-20",
      "score": "3",
      "label": "adequate",
      "rationale": "Source cards are useful evidence of retrieval behavior, but not truth by themselves.",
      "remediation_priority": "medium",
      "next_action": "Use for source strategy; verify facts before external claims."
    },
    {
      "source_group": "Brave Search source behavior",
      "source_type": "search_surface_source",
      "observed_in": "NF selected Brave rows",
      "score": "3",
      "label": "adequate",
      "rationale": "Useful independent-index behavior, but not Brave Leo/browser-agent evidence.",
      "remediation_priority": "medium",
      "next_action": "Keep Brave Search separate; test Brave Leo only when approved/available."
    }
  ],
  "risks": [
    {
      "risk_id": "FR-001",
      "client_id": "nfocus-trax",
      "run_id": "run_2026-06-03_day1",
      "prompt_id": "NF-P22",
      "surface": "ChatGPT Search; Gemini; Perplexity; Brave Search; Copilot/Bing",
      "answer_excerpt": "Pricing, implementation, security, integration/API, support, and compliance details were attempted by answer surfaces.",
      "cited_source": "mixed third-party and directory sources",
      "claim_type": "pricing_security_implementation_support",
      "severity": "high",
      "business_risk": "Buyers may treat unverified generated details as official purchasing facts.",
      "likely_origin": "official source gaps plus third-party/directory retrieval",
      "verification_needed": "client_required",
      "recommended_fix": "Publish approved buyer-risk FAQ covering pricing policy, implementation, integrations/API, security/privacy/compliance, support, and migration basics.",
      "owner": "nFocus/client plus SEO/content",
      "priority": "critical",
      "retest_prompt_id": "NF-P22",
      "retest_date": "after approved updates go live",
      "status": "open",
      "notes": "Treat all details as answer-surface behavior evidence, not verified product facts."
    },
    {
      "risk_id": "FR-002",
      "client_id": "nfocus-trax",
      "run_id": "run_2026-06-03_day1",
      "prompt_id": "G20-20",
      "surface": "Google Search / AI Overview",
      "answer_excerpt": "Google mixed nFocus with unrelated Trax Technologies, SecurityTrax, and trax.solutions style sources while answering pricing/security/compliance prompts.",
      "cited_source": "wrong-entity SERP/source set",
      "claim_type": "wrong_entity_confusion",
      "severity": "critical",
      "business_risk": "Wrong-entity claims can damage buyer trust and create compliance/security confusion.",
      "likely_origin": "similar names plus incomplete official disambiguation",
      "verification_needed": "client_required",
      "recommended_fix": "Add explicit TraxSolutions/nFocus disambiguation, official buyer-risk facts, and stronger owned source routing; monitor wrong-entity sources in retest.",
      "owner": "SEO/content plus client verification",
      "priority": "critical",
      "retest_prompt_id": "G20-20",
      "retest_date": "after approved updates go live",
      "status": "open",
      "notes": "Highest Google factual-risk/entity-confusion anchor."
    },
    {
      "risk_id": "FR-003",
      "client_id": "nfocus-trax",
      "run_id": "run_2026-06-03_day1",
      "prompt_id": "G20-14",
      "surface": "Google Search / AI Overview",
      "answer_excerpt": "Comparison row included risky pricing claims with blank rendered dollar values.",
      "cited_source": "Google AIO/source cards",
      "claim_type": "pricing_claim_risk",
      "severity": "high",
      "business_risk": "Blank or malformed pricing can mislead buyers and weaken trust.",
      "likely_origin": "Google generated comparison from incomplete/weak pricing sources",
      "verification_needed": "client_required",
      "recommended_fix": "Avoid external pricing language until official policy is approved; add pricing-policy or sales-contact language if client approves.",
      "owner": "client plus content",
      "priority": "high",
      "retest_prompt_id": "G20-14",
      "retest_date": "after approved updates go live",
      "status": "open",
      "notes": "Use as pricing-risk evidence only."
    },
    {
      "risk_id": "FR-004",
      "client_id": "nfocus-trax",
      "run_id": "run_2026-06-03_day1",
      "prompt_id": "NF-P02",
      "surface": "Gemini; Copilot/Bing; Perplexity; Brave Search",
      "answer_excerpt": "HQ/address or office details appeared from third-party or generated source context.",
      "cited_source": "Highperformr; ZoomInfo; LinkedIn; generated answer context",
      "claim_type": "hq_address_entity_details",
      "severity": "medium",
      "business_risk": "Wrong address/entity details reduce trust and may create sales friction.",
      "likely_origin": "third-party profiles and entity-source inconsistency",
      "verification_needed": "client_required",
      "recommended_fix": "Verify HQ/address/entity details and align official site, schema, LinkedIn, directories, and third-party profiles.",
      "owner": "client plus SEO/entity cleanup",
      "priority": "medium",
      "retest_prompt_id": "NF-P02",
      "retest_date": "after profile cleanup",
      "status": "open",
      "notes": "Do not repeat HQ/address details externally until approved."
    },
    {
      "risk_id": "FR-005",
      "client_id": "nfocus-trax",
      "run_id": "run_2026-06-03_day1",
      "prompt_id": "NF-P20",
      "surface": "ChatGPT Search; Gemini; Brave Search; Copilot/Bing",
      "answer_excerpt": "Named customer examples and outcome metrics appeared in proof-retrieval answers.",
      "cited_source": "owned nFocus pages; PDF; impact studies",
      "claim_type": "named_customer_outcome_metrics",
      "severity": "medium",
      "business_risk": "Unapproved customer/outcome claims can create client approval and legal/reputation risk.",
      "likely_origin": "owned proof scattered across pages/PDFs",
      "verification_needed": "client_required",
      "recommended_fix": "Create approved proof list with customer names, outcome metrics, dates, and allowed language.",
      "owner": "client plus content/legal review",
      "priority": "high",
      "retest_prompt_id": "NF-P20",
      "retest_date": "after approved proof page update",
      "status": "open",
      "notes": "Proof retrieval is positive, but named examples/figures remain verification-gated."
    },
    {
      "risk_id": "FR-006",
      "client_id": "nfocus-trax",
      "run_id": "run_2026-06-03_day1",
      "prompt_id": "NF-P30",
      "surface": "Gemini; Perplexity; answer surfaces",
      "answer_excerpt": "PDF URL/date/version surfaced as part of owned-source routing.",
      "cited_source": "TraxSolutions overview PDF",
      "claim_type": "pdf_date_version",
      "severity": "medium",
      "business_risk": "Stale or incorrect PDF/date references can make the evidence package look outdated.",
      "likely_origin": "PDF source routing and extracted PDF artifact",
      "verification_needed": "client_required",
      "recommended_fix": "Verify current product PDF URL/date/version and mirror core proof in visible HTML.",
      "owner": "client plus content",
      "priority": "medium",
      "retest_prompt_id": "NF-P30",
      "retest_date": "after PDF/HTML update",
      "status": "open",
      "notes": "Do not rely on PDF alone for buyer-critical facts."
    },
    {
      "risk_id": "FR-007",
      "client_id": "nfocus-trax",
      "run_id": "run_2026-06-03_day1",
      "prompt_id": "technical",
      "surface": "Technical baseline",
      "answer_excerpt": "PROCESS PAYMENTS tile links to /moneytrax/ which returns 404; /traxsolutions/payment-processing/ returns 200.",
      "cited_source": "technical/internal_link_status.csv",
      "claim_type": "moneytrax_payment_routing",
      "severity": "high",
      "business_risk": "Users, crawlers, and answer agents may hit a dead module path.",
      "likely_origin": "stale internal link",
      "verification_needed": "client_required",
      "recommended_fix": "Update links to /traxsolutions/payment-processing/ where appropriate and retest status.",
      "owner": "web/dev",
      "priority": "critical",
      "retest_prompt_id": "NF-P17",
      "retest_date": "after link fix",
      "status": "open",
      "notes": "Narrow routing/retrieval finding, not a broad payment-product failure."
    },
    {
      "risk_id": "FR-008",
      "client_id": "nfocus-trax",
      "run_id": "run_2026-06-03_day1",
      "prompt_id": "NF-P13",
      "surface": "ChatGPT Search; Perplexity; Brave Search; Google G20-15",
      "answer_excerpt": "TraxSolutions was absent or weak in Salesforce alternative prompts.",
      "cited_source": "competitor-led category and alternatives sources",
      "claim_type": "missing_differentiator",
      "severity": "medium",
      "business_risk": "High-intent buyers may shortlist competitors before seeing TraxSolutions.",
      "likely_origin": "missing comparison/alternative source material",
      "verification_needed": "client_required",
      "recommended_fix": "Build factual Salesforce alternative/comparison page using approved buyer-fit positioning.",
      "owner": "content/SEO",
      "priority": "high",
      "retest_prompt_id": "NF-P13",
      "retest_date": "30-45 days after publish",
      "status": "open",
      "notes": "This is a visibility/business-risk issue, not a factual-error claim."
    }
  ],
  "tickets": [
    {
      "id": "IT-001",
      "title": "Fix MoneyTrax / Payment Routing",
      "priority": "critical",
      "owner": "web/dev plus content QA",
      "evidence": "NF-R001, technical/internal_link_status.csv, technical_baseline_summary.md",
      "affected": "NF-P17, NF-P22, G20-20, technical extraction",
      "impact": "buyer-risk and retrieval friction around payment-processing language",
      "fix": "update links from /moneytrax/ to /traxsolutions/payment-processing/ where appropriate; check duplicate menus/modules",
      "criteria": [
        "`/moneytrax/` no longer appears as active product/module link unless intentionally redirected",
        "`/traxsolutions/payment-processing/` returns 200",
        "payment module language is official and client-approved",
        "retest verifies no dead path in crawler/internal-link check"
      ],
      "retest": "NF-P17, NF-P22, G20-20"
    },
    {
      "id": "IT-002",
      "title": "Add Product/Software Schema Aligned With Visible Copy",
      "priority": "high",
      "owner": "SEO/dev/content",
      "evidence": "NF-R002, schema_blocks.jsonl, technical_baseline_summary.md",
      "affected": "branded/entity, source routing, buyer-risk prompts",
      "impact": "fewer explicit product/entity/category hooks for answer systems",
      "fix": "add SoftwareApplication/Product/Service schema using visible, official, approved facts only",
      "criteria": [
        "schema validates",
        "schema matches visible page text",
        "no unapproved pricing/security/compliance claims in schema",
        "FAQPage schema added only if matching visible FAQ exists"
      ],
      "retest": "NF-P01, NF-P02, NF-P30"
    },
    {
      "id": "IT-003",
      "title": "Publish Buyer-Risk FAQ / Answer-First Decision Content",
      "priority": "critical",
      "owner": "content/product marketing/client verification",
      "evidence": "NF-P22, G20-20, factual-risk register",
      "affected": "pricing, implementation, security, privacy, compliance, integrations/API, support, migration",
      "impact": "answer engines fill buyer-critical gaps from weak, mixed, or wrong-entity sources",
      "fix": "publish visible FAQ or decision section with approved wording for sensitive buyer facts",
      "criteria": [
        "pricing policy or sales-contact language approved",
        "implementation approach approved",
        "integrations/API and migration basics approved",
        "security/privacy/compliance posture approved"
      ],
      "retest": "NF-P22, G20-20, G20-14"
    },
    {
      "id": "IT-004",
      "title": "Consolidate Approved Proof On Main Product Page",
      "priority": "high",
      "owner": "content/client verification",
      "evidence": "NF-R006, NF-P20, G20-18, source_recon_summary.md",
      "affected": "proof retrieval, shortlist, comparison, recommendation prompts",
      "impact": "answer systems may miss proof or pull it from scattered assets",
      "fix": "add a proof/trust block to the main TraxSolutions page with approved metrics, customer examples, and links to impact studies",
      "criteria": [
        "named customers and outcome metrics approved",
        "proof visible as static text",
        "proof links point to current owned pages/assets",
        "PDF/date/version verified if referenced"
      ],
      "retest": "NF-P20, G20-18, G20-19"
    },
    {
      "id": "IT-005",
      "title": "Make Animated Proof Metrics Extractable",
      "priority": "medium",
      "owner": "web/dev/content",
      "evidence": "NF-R003, technical_baseline_summary.json",
      "affected": "proof retrieval, browser-agent/source extraction",
      "impact": "extraction-limited systems can read proof metrics as 0+, 0%, or 0+ Years",
      "fix": "render actual values in static HTML or add adjacent plain-text proof statements",
      "criteria": [
        "extracted text contains intended proof values",
        "no visible fallback `0` values appear as the only machine-readable proof",
        "proof values are client-approved"
      ],
      "retest": "NF-P20, NF-P30"
    },
    {
      "id": "IT-006",
      "title": "Add Descriptive Alt Text For Product/Module Imagery",
      "priority": "medium",
      "owner": "web/dev/content",
      "evidence": "NF-R004, technical_baseline_summary.md",
      "affected": "technical extraction, accessibility, entity/module understanding",
      "impact": "weak image/entity accessibility and product/module interpretation",
      "fix": "add concise alt text for logo, product/module imagery, customer/proof imagery, and feature visuals",
      "criteria": [
        "26 empty/missing alt values remediated or intentionally marked decorative",
        "alt text is descriptive but not keyword-stuffed",
        "page extraction check shows improved image metadata"
      ],
      "retest": "technical extraction audit"
    },
    {
      "id": "IT-007",
      "title": "Rewrite Meta Description Around Retrieval Terms",
      "priority": "medium",
      "owner": "SEO/content",
      "evidence": "NF-R005, technical_baseline_summary.md",
      "affected": "broad category and source routing prompts",
      "impact": "product page metadata does not clearly reinforce category, audience, or use cases",
      "fix": "update meta description using approved language for nonprofit program management, participant tracking, attendance, registration, case management, outcome measurement, and impact reporting",
      "criteria": [
        "meta description reflects visible page content",
        "no unsupported superiority claims",
        "retrieval terms included naturally"
      ],
      "retest": "NF-P04, NF-P05, NF-P06, NF-P30"
    },
    {
      "id": "IT-008",
      "title": "Build Category And Comparison Pages",
      "priority": "high",
      "owner": "SEO/content/product marketing",
      "evidence": "NF-P05, NF-P13, G20-01, G20-02, G20-15, G20-16, G20-17",
      "affected": "broad category, alternatives, comparison, shortlist prompts",
      "impact": "high-intent buyers may see competitors first",
      "fix": "create factual buyer-fit pages for nonprofit case management, nonprofit program management, attendance tracking, online registration, outcome measurement, Salesforce alternatives, CaseWorthy alternatives, and spreadsheet replacement",
      "criteria": [
        "pages answer buyer questions directly",
        "competitor language is factual and non-disparaging",
        "pages link to proof and official product/module pages",
        "sensitive claims verified"
      ],
      "retest": "NF-P04, NF-P05, NF-P13, G20-01, G20-15, G20-16, G20-17"
    },
    {
      "id": "IT-009",
      "title": "Strengthen Third-Party Profiles And Review Depth",
      "priority": "medium",
      "owner": "reputation/marketing/client",
      "evidence": "NF-R007, source_recon_summary.md, scorecard review/trust 4/8",
      "affected": "reputation, comparison, review-driven buyer prompts",
      "impact": "answer engines may prefer competitors with stronger review/profile validation",
      "fix": "update and verify G2/Capterra/Software Advice/GetApp/TrustRadius or relevant profiles; start review-generation plan where appropriate",
      "criteria": [
        "profiles are claimed/updated",
        "product/category description matches approved positioning",
        "no unapproved pricing/security/support claims",
        "review plan exists"
      ],
      "retest": "NF-P03, NF-P19, NF-P22"
    },
    {
      "id": "IT-010",
      "title": "Add Entity Disambiguation And Source Consistency Signals",
      "priority": "high",
      "owner": "SEO/content/entity cleanup/client",
      "evidence": "G20-20, NF-P22, source-quality scoring wrong-entity group",
      "affected": "branded fact checks, buyer-risk prompts, Google Search / AI Overview",
      "impact": "wrong-entity sources can create pricing/security/compliance confusion",
      "fix": "add explicit disambiguation language on owned pages and schema; align LinkedIn, directories, profiles, and third-party entity details",
      "criteria": [
        "official pages clearly distinguish TraxSolutions by nFocus from unrelated Trax entities",
        "sameAs/profile links are accurate",
        "third-party profiles corrected where feasible",
        "retest shows reduced wrong-entity source mixing"
      ],
      "retest": "NF-P02, NF-P22, G20-20"
    },
    {
      "id": "IT-011",
      "title": "Add API Corroboration Lane When Approved",
      "priority": "low until approved",
      "owner": "Codex Desktop/operator",
      "evidence": "NF-R008, scoring summary, retest plan",
      "affected": "API corroboration, vendor calibration",
      "impact": "Day 1 lacks API corroboration; consumer evidence remains sufficient but not API-backed",
      "fix": "add approved API keys or explicitly keep API out of scope",
      "criteria": [
        "API access approved",
        "API results stored separately from consumer-surface evidence",
        "no API output is presented as consumer-surface proof"
      ],
      "retest": "selected prompt subset only after approval"
    }
  ],
  "competitors": [
    {
      "name": "Bonterra",
      "count": 10,
      "prompts": [
        "G20-01",
        "G20-02",
        "G20-03",
        "G20-04",
        "G20-05",
        "G20-15",
        "G20-17",
        "NF-P06",
        "NF-P13",
        "NF-P20"
      ],
      "lanes": [
        "alternative",
        "category_discovery",
        "proof_retrieval"
      ]
    },
    {
      "name": "LiveImpact",
      "count": 9,
      "prompts": [
        "G20-01",
        "G20-03",
        "G20-04",
        "G20-05",
        "G20-15",
        "G20-16",
        "NF-P04",
        "NF-P06",
        "NF-P13"
      ],
      "lanes": [
        "alternative",
        "category_discovery"
      ]
    },
    {
      "name": "CaseWorthy",
      "count": 6,
      "prompts": [
        "G20-12",
        "G20-15",
        "NF-P01",
        "NF-P05",
        "NF-P10",
        "NF-P13"
      ],
      "lanes": [
        "alternative",
        "branded_fact",
        "category_discovery",
        "comparison"
      ]
    },
    {
      "name": "Salesforce",
      "count": 6,
      "prompts": [
        "G20-03",
        "G20-04",
        "G20-17",
        "NF-P04",
        "NF-P05",
        "NF-P20"
      ],
      "lanes": [
        "alternative",
        "category_discovery",
        "proof_retrieval"
      ]
    },
    {
      "name": "Casebook",
      "count": 4,
      "prompts": [
        "G20-01",
        "G20-02",
        "G20-16",
        "NF-P05"
      ],
      "lanes": [
        "alternative",
        "category_discovery"
      ]
    },
    {
      "name": "Salesforce Nonprofit Cloud",
      "count": 4,
      "prompts": [
        "G20-11",
        "NF-P01",
        "NF-P09",
        "NF-P13"
      ],
      "lanes": [
        "alternative",
        "branded_fact",
        "comparison"
      ]
    },
    {
      "name": "SureImpact",
      "count": 4,
      "prompts": [
        "G20-05",
        "G20-13",
        "NF-P06",
        "NF-P20"
      ],
      "lanes": [
        "category_discovery",
        "comparison",
        "proof_retrieval"
      ]
    },
    {
      "name": "CharityTracker",
      "count": 3,
      "prompts": [
        "G20-01",
        "G20-02",
        "G20-16"
      ],
      "lanes": [
        "alternative",
        "category_discovery"
      ]
    },
    {
      "name": "Clear Impact",
      "count": 3,
      "prompts": [
        "G20-05",
        "NF-P06",
        "NF-P20"
      ],
      "lanes": [
        "category_discovery",
        "proof_retrieval"
      ]
    },
    {
      "name": "Hibox",
      "count": 3,
      "prompts": [
        "G20-03",
        "G20-04",
        "NF-P04"
      ],
      "lanes": [
        "category_discovery"
      ]
    },
    {
      "name": "Amilia",
      "count": 2,
      "prompts": [
        "G20-07",
        "G20-09"
      ],
      "lanes": [
        "buyer_fit",
        "category_discovery"
      ]
    },
    {
      "name": "Bonterra Apricot",
      "count": 2,
      "prompts": [
        "G20-16",
        "NF-P05"
      ],
      "lanes": [
        "alternative",
        "category_discovery"
      ]
    },
    {
      "name": "Case Management Hub",
      "count": 2,
      "prompts": [
        "G20-01",
        "G20-02"
      ],
      "lanes": [
        "category_discovery"
      ]
    },
    {
      "name": "Neon CRM",
      "count": 2,
      "prompts": [
        "G20-15",
        "NF-P13"
      ],
      "lanes": [
        "alternative"
      ]
    },
    {
      "name": "ACTIVE Net",
      "count": 1,
      "prompts": [
        "G20-09"
      ],
      "lanes": [
        "buyer_fit"
      ]
    },
    {
      "name": "Airtable",
      "count": 1,
      "prompts": [
        "G20-17"
      ],
      "lanes": [
        "alternative"
      ]
    },
    {
      "name": "Apricot/Bonterra",
      "count": 1,
      "prompts": [
        "NF-P01"
      ],
      "lanes": [
        "branded_fact"
      ]
    },
    {
      "name": "Bloomerang",
      "count": 1,
      "prompts": [
        "G20-03"
      ],
      "lanes": [
        "category_discovery"
      ]
    },
    {
      "name": "Bonterra/Apricot",
      "count": 1,
      "prompts": [
        "NF-P04"
      ],
      "lanes": [
        "category_discovery"
      ]
    },
    {
      "name": "CivicPlus",
      "count": 1,
      "prompts": [
        "G20-09"
      ],
      "lanes": [
        "buyer_fit"
      ]
    },
    {
      "name": "CommunityPass",
      "count": 1,
      "prompts": [
        "G20-09"
      ],
      "lanes": [
        "buyer_fit"
      ]
    },
    {
      "name": "Exponent Case Management",
      "count": 1,
      "prompts": [
        "G20-14"
      ],
      "lanes": [
        "comparison"
      ]
    },
    {
      "name": "Foundant",
      "count": 1,
      "prompts": [
        "G20-17"
      ],
      "lanes": [
        "alternative"
      ]
    },
    {
      "name": "Givebutter",
      "count": 1,
      "prompts": [
        "G20-07"
      ],
      "lanes": [
        "category_discovery"
      ]
    },
    {
      "name": "Grist",
      "count": 1,
      "prompts": [
        "G20-17"
      ],
      "lanes": [
        "alternative"
      ]
    },
    {
      "name": "Guidebook",
      "count": 1,
      "prompts": [
        "G20-07"
      ],
      "lanes": [
        "category_discovery"
      ]
    },
    {
      "name": "InfoFlo",
      "count": 1,
      "prompts": [
        "G20-16"
      ],
      "lanes": [
        "alternative"
      ]
    },
    {
      "name": "Instrumentl",
      "count": 1,
      "prompts": [
        "G20-17"
      ],
      "lanes": [
        "alternative"
      ]
    },
    {
      "name": "Jumbula",
      "count": 1,
      "prompts": [
        "G20-07"
      ],
      "lanes": [
        "category_discovery"
      ]
    },
    {
      "name": "Microsoft Dynamics",
      "count": 1,
      "prompts": [
        "G20-15"
      ],
      "lanes": [
        "alternative"
      ]
    },
    {
      "name": "MyRec",
      "count": 1,
      "prompts": [
        "G20-09"
      ],
      "lanes": [
        "buyer_fit"
      ]
    },
    {
      "name": "Notion",
      "count": 1,
      "prompts": [
        "G20-17"
      ],
      "lanes": [
        "alternative"
      ]
    },
    {
      "name": "OneTap",
      "count": 1,
      "prompts": [
        "NF-P04"
      ],
      "lanes": [
        "category_discovery"
      ]
    },
    {
      "name": "PlanStreet",
      "count": 1,
      "prompts": [
        "NF-P05"
      ],
      "lanes": [
        "category_discovery"
      ]
    },
    {
      "name": "RecDesk",
      "count": 1,
      "prompts": [
        "G20-09"
      ],
      "lanes": [
        "buyer_fit"
      ]
    },
    {
      "name": "SecurityTrax",
      "count": 1,
      "prompts": [
        "G20-20"
      ],
      "lanes": [
        "risk_check"
      ]
    },
    {
      "name": "SimpleTix",
      "count": 1,
      "prompts": [
        "G20-07"
      ],
      "lanes": [
        "category_discovery"
      ]
    },
    {
      "name": "Sopact",
      "count": 1,
      "prompts": [
        "G20-04"
      ],
      "lanes": [
        "category_discovery"
      ]
    },
    {
      "name": "Submittable",
      "count": 1,
      "prompts": [
        "G20-17"
      ],
      "lanes": [
        "alternative"
      ]
    },
    {
      "name": "Trax Technologies",
      "count": 1,
      "prompts": [
        "G20-20"
      ],
      "lanes": [
        "risk_check"
      ]
    },
    {
      "name": "Zeffy",
      "count": 1,
      "prompts": [
        "G20-07"
      ],
      "lanes": [
        "category_discovery"
      ]
    },
    {
      "name": "directories",
      "count": 1,
      "prompts": [
        "G20-20"
      ],
      "lanes": [
        "risk_check"
      ]
    },
    {
      "name": "extendedReach",
      "count": 1,
      "prompts": [
        "G20-02"
      ],
      "lanes": [
        "category_discovery"
      ]
    },
    {
      "name": "trax.solutions",
      "count": 1,
      "prompts": [
        "G20-20"
      ],
      "lanes": [
        "risk_check"
      ]
    },
    {
      "name": "workforce/case-management competitors",
      "count": 1,
      "prompts": [
        "G20-10"
      ],
      "lanes": [
        "buyer_fit"
      ]
    },
    {
      "name": "youth-development software competitors",
      "count": 1,
      "prompts": [
        "G20-08"
      ],
      "lanes": [
        "buyer_fit"
      ]
    },
    {
      "name": "youth/afterschool tools",
      "count": 1,
      "prompts": [
        "G20-06"
      ],
      "lanes": [
        "category_discovery"
      ]
    }
  ]
};
