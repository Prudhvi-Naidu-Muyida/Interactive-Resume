
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function InteractiveResume() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [unlocked, setUnlocked] = useState({});
  const [skillSelected, setSkillSelected] = useState(null);

  const jobs = [
    {
      id: 1,
      title: "Senior Test Engineer",
      company: "EY GDS, India (Project: HSBC Bank, Hong Kong)",
      years: "Feb 2025 - Present",
      bullets: [
        "Functional testing for web application TCS BaNCS (Corporate Actions, Wealth & Asset Management).",
        "Prepared test plans and test cases; involved in E2E and standalone testing.",
        "Activities: WSR (Weekly Status Report), DSR (Daily Status Report), Peer Review, TER (Test Exit Report)."
      ]
    },
    {
      id: 2,
      title: "Quality Engineering Analyst",
      company: "Accenture, India (Project: CITI Bank, North America)",
      years: "Oct 2021 - Feb 2025",
      bullets: [
        "Collaborated with dev and business analysts to define test scope and requirements.",
        "Test plan, test case design and execution for core banking applications (mainframe & web automation using Selenium).",
        "Participated in API testing, UAT, defect tracking using Jira/HP ALM, used Eclipse and TestNG for automation execution."
      ]
    }
  ];

  const skills = [
    "Manual Testing",
    "Test Automation",
    "Gen AI (exploring)",
    "Selenium",
    "Playwright",
    "Java",
    "BDD / Cucumber",
    "API Testing",
    "Jira / Zephyr / HP ALM",
    "Mainframe Testing",
    "Agile / Scrum",
  ];

  const projects = [
    {
      id: 1,
      title: "Core Banking Automation",
      type: "Automation",
      desc: "Automation of core banking flows; regression suite and CI integration.",
      img: "https://via.placeholder.com/800x420?text=Core+Banking+Automation"
    },
    {
      id: 2,
      title: "Test Orchestration & Reporting",
      type: "Framework",
      desc: "CI test orchestration with parallel runs and consolidated reporting.",
      img: "https://via.placeholder.com/800x420?text=Test+Orchestration"
    }
  ];

  function toggleUnlock(key) {
    setUnlocked((u) => ({ ...u, [key]: !u[key] }));
  }

  return (
    <div>
      <header className="header">
        <div className="container" style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
          <div>
            <motion.h1 initial={{y:8, opacity:0}} animate={{y:0, opacity:1}} style={{fontSize:32, margin:0}}>Prudhvi Naidu</motion.h1>
            <motion.p initial={{y:8, opacity:0}} animate={{y:0, opacity:1}} style={{marginTop:8}}>Experienced software engineer (3 yrs 9 mos) — QA Automation | Selenium | Playwright | Java | BDD</motion.p>
          </div>
          <div style={{textAlign:'right'}}>
            <div style={{width:96, height:96, borderRadius:48, background:'rgba(255,255,255,0.12)', display:'flex', alignItems:'center', justifyContent:'center'}}>PN</div>
            <div style={{marginTop:8}}><a className="btn" href="#contact">Contact</a></div>
          </div>
        </div>
      </header>

      <main className="container" style={{marginTop:24}}>
        <section className="card" style={{padding:20}}>
          <h2>Professional Summary</h2>
          <p>
            Experienced software engineer with 3 years 9 months of expertise in test Automation in Mainframe/Web, Manual testing, designing and implementation of automation frameworks. 
            Proficient in collaboration of cross-functional teams to gather requirements, formulate test plans and optimize testing processes. Demonstrated managerial abilities in overseeing QA teams ensuring 100% successful completion of deliverables. Currently exploring GEN AI Scope in Software Testing.
          </p>
        </section>

        <section style={{marginTop:18}}>
          <h2>Experience</h2>
          <div style={{display:'grid', gap:12}}>
            {jobs.map(j => (
              <div key={j.id} className="card" onClick={()=> setSelectedJob(selectedJob===j.id?null:j.id)} style={{cursor:'pointer'}}>
                <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                  <div>
                    <div style={{fontWeight:600}}>{j.title}</div>
                    <div style={{color:'#475569'}}>{j.company} · {j.years}</div>
                  </div>
                  <div style={{color:'#4f46e5'}}>{selectedJob===j.id ? 'Close' : 'Open'}</div>
                </div>
                {selectedJob===j.id && (
                  <div style={{marginTop:12}}>
                    <ul>
                      {j.bullets.map((b,i)=>(<li key={i}>{b}</li>))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section style={{marginTop:18}} className="card">
          <h2>Skills</h2>
          <div style={{marginTop:8}}>
            {skills.map((s,idx)=>(
              <span key={idx} className="skill" onMouseEnter={()=>{}}>{s}</span>
            ))}
          </div>
        </section>

        <section style={{marginTop:18}}>
          <h2>Projects</h2>
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:12}}>
            {projects.map(p=>(
              <div key={p.id} className="card">
                <img src={p.img} alt={p.title} style={{width:'100%', borderRadius:8}}/>
                <div style={{marginTop:8}}>
                  <div style={{fontWeight:600}}>{p.title}</div>
                  <div style={{color:'#475569'}}>{p.type}</div>
                  <p>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="education" style={{marginTop:18}} className="card">
          <h2>Education</h2>
          <div style={{fontWeight:600}}>Lendi Institute of Engineering and Technology (JNTU Kakinada)</div>
          <div>B.Tech — Electrical and Electronics Engineering · Jun 2017 - Jun 2021 · GPA: 8.33</div>
        </section>

        <section id="contact" style={{marginTop:18}} className="card">
          <h2>Contact</h2>
          <p>Please provide email, LinkedIn and GitHub to replace placeholders.</p>
        </section>

        <footer style={{marginTop:24, textAlign:'center', color:'#64748b'}}>Built with ❤️ — interactive prototype</footer>
      </main>
    </div>
  );
}
