import React, { useState } from "react";
import {
  HiOutlineChartBar,
  HiOutlineClock,
  HiOutlineCode,
  HiOutlineDocumentDuplicate,
  HiOutlinePlay,
  HiOutlineQuestionMarkCircle,
} from "react-icons/hi";

const Topic = ({ part, completed, sections }) => {
    const [open, setOpen] = useState(false);
  return (
    <div className={`${open ? "open-topic-card":"topic-card"} dmsans hover-pointer `} onClick={()=>setOpen(!open)}>
      <div className="p-1">
        <div className="d-flex p-3 align-items-center justify-content-between ">
          <div className="min-w-33 ">
            <p className="mb-0">PART {part}</p>
            <h5 className="fs-5 fw-bold text-ellipsis">Lorem ipsum dolor sit amet</h5>
          </div>
          <div>
            <div className="d-flex gap-3">
              <div className="d-flex align-items-center gap-1">
                <HiOutlineClock className="fs-5  section-icon" />
                <div className="fw-normal">02:00:00</div>
              </div>
              <div className="d-sm-flex d-none align-items-center gap-1">
                <HiOutlineChartBar className="fs-5 section-icon"/>
                <div className="fw-normal">Medium</div>
              </div>

              <div className="d-sm-flex d-none align-items-center gap-1">
                <HiOutlineDocumentDuplicate className="fs-5 section-icon"/>
                <div className="fw-normal">{sections}</div>
              </div>
              <div className="d-flex align-items-center gap-1">
                {open===true ? <div className="vectorDown" ></div> : <div className="vectorUp" ></div>}
              </div>
            </div>
            <div className="d-flex w-100 justify-content-end mt-3">
              <div className="background-blue px-2 topic-border" >
                {completed}% Completed
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="progress" style={{ height: '7px', borderRadius: '0 0 12px 12px' }}>
        <div
          className="progress-bar bg-custom"
          role="progressbar"
          style={{ width: `${completed}%`, borderRadius: '0 0 0px 0px' }}
          aria-valuenow="45"
          aria-valuemin="0"
          aria-valuemax="100"
        >
        </div>
      </div>
      {open? 
        <div className="px-4">
            <div className="d-flex justify-content-between py-4">
                <div className="d-flex align-items-center gap-1">
                    <HiOutlinePlay className="fs-5 section-icon section-icon"/>
                    <span className="fw-bold">Video 1</span>
                </div>
                <div className="d-flex gap-1 align-items-center">
                    <HiOutlineClock className="fs-5" />
                    <div className="fw-normal">10:00</div>
                </div>
            </div>
            <div className="divider"></div>
            
            <div className="d-flex justify-content-between py-4">
                <div className="d-flex align-items-center gap-1">
                    <HiOutlineQuestionMarkCircle className="fs-5 section-icon"/>
                    <span className="fw-bold">Article 1</span>
                </div>
                <div className="d-flex gap-1 align-items-center">
                    <HiOutlineClock className="fs-5 " />
                    <div className="fw-normal">10:00</div>
                </div>
            </div>
            <div className="divider"></div>

            <div className="d-flex justify-content-between py-4">
                <div className="d-flex align-items-center gap-1">
                    <HiOutlineQuestionMarkCircle className="fs-5 section-icon"/>
                    <span className="fw-bold">Quiz 1</span>
                </div>
                <div className="d-flex gap-1 align-items-center">
                    <HiOutlineClock className="fs-5 " />
                    <div className="fw-normal">10:00</div>
                </div>
            </div>
            <div className="divider"></div>

            <div className="d-flex justify-content-between py-4">
                <div className="d-flex align-items-center gap-1">
                    <HiOutlineCode className="fs-5 section-icon"/>
                    <span className="fw-bold">Coding Exercise 1</span>
                </div>
                <div className="d-flex gap-1 align-items-center">
                    <HiOutlineClock className="fs-5 " />
                    <div className="fw-normal">10:00</div>
                </div>
            </div>
            <div className="divider"></div>

            
            <div className="d-flex justify-content-between py-4">
                <div className="d-flex align-items-center gap-1">
                    <HiOutlineDocumentDuplicate className="fs-5 section-icon"/>
                    <span className="fw-bold">Combined Resource 1</span>
                </div>
                <div className="d-flex gap-1 align-items-center">
                    <HiOutlineClock className="fs-5 " />
                    <div className="fw-normal">10:00</div>
                </div>
            </div>
        </div>
      :<></>}
    </div>
  );
};

export default Topic;
