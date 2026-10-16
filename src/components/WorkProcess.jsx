import { useEffect, useRef, useState } from "react";
import {
  FaComments,
  FaClipboardList,
  FaDraftingCompass,
  FaCheckCircle,
  FaRocket,
  FaVial,
  FaTimes,
} from "react-icons/fa";
import "./../../public/css/work.css";

const steps = [
  {
    icon: <FaComments />,
    number: "01",
    title: "Discuss",
    description: "Understand your needs and goals.",
    details:
      "We start with a focused conversation about your business, audience, goals, and requirements. This gives us a shared definition of success and a clear scope for the work.",
  },
  {
    icon: <FaClipboardList />,
    number: "02",
    title: "Plan",
    description: "Share ideas, timeline, and pricing.",
    details:
      "I organize the content and visitor journey, then develop a visual direction for your review. Your feedback helps confirm the design before development begins.",
  },
  {
    icon: <FaCheckCircle />,
    number: "03",
    title: "Design",
    description: "Create a modern and engaging UI.",
    details:
      "I build the approved design into a responsive website, check it across screen sizes, and refine the details with your feedback.",
  },
  {
    icon: <FaDraftingCompass />,
    number: "04",
    title: "Develop",
    description: "Build a responsive and optimized website.",
    details:
      "I build the approved design into a responsive website, check it across screen sizes, and refine the details with your feedback.",
  },
  {
    icon: <FaVial />,
    number: "05",
    title: "Test",
    description: "Check performance and make revisions.",
    details:
      "I test the website across screen sizes, check key functionality and performance, and make revisions based on your feedback.",
  },
  {
    icon: <FaRocket />,
    number: "06",
    title: "Launch",
    description: "Go live and provide ongoing support.",
    details:
      "After a final review of functionality and presentation, I prepare the website for launch and can continue helping with updates and ongoing improvements.",
  },
];

const WorkProcess = () => {
  const [selectedStep, setSelectedStep] = useState(null);
  const dialogRef = useRef(null);
  const lastTriggerRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (selectedStep && !dialog.open) dialog.showModal();
    if (!selectedStep && dialog.open) dialog.close();
  }, [selectedStep]);

  const closeDialog = () => setSelectedStep(null);

  const handleDialogClose = () => {
    setSelectedStep(null);
    lastTriggerRef.current?.focus();
  };

  return (
    <section className="work-process" id="process">
      <div className="container">
        <div className="section-title process-section-title">
          <h5>HOW I WORK</h5>
          <h2>Simple &amp; Clear Process</h2>
          <p>A smooth and transparent process from discussion to launch.</p>
        </div>

        <div
          className="process-grid"
          role="list"
          aria-label="Steps in my work process"
        >
          {steps.map((step) => (
            <article className="process-card" role="listitem" key={step.number}>
              <button
                type="button"
                className="process-card-open"
                aria-label={`More about ${step.title}`}
                onClick={(event) => {
                  lastTriggerRef.current = event.currentTarget;
                  setSelectedStep(step);
                }}
              >
                <span className="process-card-top">
                  <span className="process-icon">{step.icon}</span>
                  <span className="process-number" aria-label={`Step ${step.number}`}>{Number(step.number)}</span>
                </span>
                <span className="process-card-title">{step.title}</span>
                <span className="process-card-description">{step.description}</span>
              </button>
            </article>
          ))}
        </div>
      </div>

      <dialog
        className="process-dialog"
        ref={dialogRef}
        aria-labelledby="process-dialog-title"
        onCancel={(event) => {
          event.preventDefault();
          closeDialog();
        }}
        onClose={handleDialogClose}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeDialog();
        }}
      >
        {selectedStep && (
          <div className="process-dialog-content">
            <button
              type="button"
              className="process-dialog-close"
              aria-label="Close process details"
              onClick={closeDialog}
            >
              <FaTimes />
            </button>
            <span className="process-icon">{selectedStep.icon}</span>
            <p className="process-dialog-number">STEP {selectedStep.number}</p>
            <h2 id="process-dialog-title">{selectedStep.title}</h2>
            <p>{selectedStep.details}</p>
            <button type="button" className="process-dialog-done" onClick={closeDialog}>
              Back to steps
            </button>
          </div>
        )}
      </dialog>
    </section>
  );
};

export default WorkProcess;
