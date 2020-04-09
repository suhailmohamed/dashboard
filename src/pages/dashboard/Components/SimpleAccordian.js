import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import Collapsible from 'react-collapsible';

/**
 * To render the Accordion component
 */
const SimpleAccordian = ({
  activeIndex,
  components = [],
  expandAll = false
}) => {
  const [activeFaqIndex, setActiveFaqIndex] = useState(activeIndex);

  const clickAction = activeIndex => {
    activeIndex = activeFaqIndex === activeIndex ? null : activeIndex;
    setActiveFaqIndex(activeIndex);
  };

  const accordianElements = () => {
    return components.map((component, index) => {
      if (!component) {
        return null;
      }
      let { header, content } = component;
      return (
        <Fragment
          key={index}
        >
          <Collapsible
            open={expandAll ? expandAll : index === activeFaqIndex}
            triggerTagName={'div'}
            handleTriggerClick={() => clickAction(index)}
            trigger={header}
          >
            {content}
          </Collapsible>
        </Fragment>
      );
    });
  };
  return (
    <Fragment>
      {accordianElements()}
    </Fragment>
  );
};

export default SimpleAccordian;
/**
 * Default proptype of the accordion has been declared
 */
SimpleAccordian.propTypes = {
  components: PropTypes.arrayOf(
    PropTypes.shape({
      header: PropTypes.element,
      content: PropTypes.element
    })
  ),
  header: PropTypes.string,
  onClickAction: PropTypes.func,
  children: PropTypes.element,
  activeIndex: PropTypes.number,
  expandAll: PropTypes.bool
};
