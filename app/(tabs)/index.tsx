import { Accordion, AccordionContent, AccordionContentText, AccordionHeader, AccordionIcon, AccordionItem, AccordionTitleText, AccordionTrigger}  from '@/components/ui/accordion'
import { ChevronUpIcon, ChevronDownIcon } from '@/components/ui/icon';

export default function App(){
  return (
    <Accordion
    className="w-[90%] m-5 border border-outline-300"
    type="multiple"
  >
    <AccordionItem value="a"
       className="border-b border-outline-300"
      >
      <AccordionHeader 
      className="bg-background-0"
      >
        <AccordionTrigger>
          {({ isExpanded }) => {
            return (
              <>
                <AccordionTitleText>
         What does the "type" prop of the Accordion component do?
                </AccordionTitleText>
                {isExpanded ? (
                  <AccordionIcon as={ChevronUpIcon} />
                ) : (
                  <AccordionIcon as={ChevronDownIcon} />
                )}
              </>
            );
          }}
        </AccordionTrigger>
      </AccordionHeader>
      <AccordionContent className="mt-0 pt-2 bg-background-50"
      >
        <AccordionContentText>
          The type prop determines whether one or multiple items can be
          opened at the same time. The default value is "single" which means
          only one item can be opened at a time. 
        </AccordionContentText>
      </AccordionContent>
    </AccordionItem>
    <AccordionItem
      value="b"
      className="border-b border-outline-300"
    >
      <AccordionHeader     >
        <AccordionTrigger>
          {({ isExpanded }) => {
            return (
              <>
                <AccordionTitleText>
               Can I disable the whole accordion?
                </AccordionTitleText>
                {isExpanded ? (
                  <AccordionIcon as={ChevronUpIcon} />
                ) : (
                  <AccordionIcon as={ChevronDownIcon} />
                )}
              </>
            );
          }}
        </AccordionTrigger>
      </AccordionHeader>
      <AccordionContent className="mt-0 pt-2 bg-background-50"
      >
        <AccordionContentText>
          Yes, you can disable the whole accordion by setting the isDisabled
          prop to true on the Accordion component.
        </AccordionContentText>
      </AccordionContent>
    </AccordionItem>
    <AccordionItem
      value="c"
    >
      <AccordionHeader
      className="bg-background-0"
      >
        <AccordionTrigger>
          {({ isExpanded }) => {
            return (
              <>
                <AccordionTitleText>
               What is a controlled accordion? How can I make it controlled?
                </AccordionTitleText>
                {isExpanded ? (
                  <AccordionIcon as={ChevronUpIcon} />
                ) : (
                  <AccordionIcon as={ChevronDownIcon} />
                )}
              </>
            );
          }}
        </AccordionTrigger>
      </AccordionHeader>
      <AccordionContent className="mt-0 pt-2 bg-background-50"
      >
        <AccordionContentText>
    Controlled components refer to the components where the state and behaviors are controlled by the Parent component. You can make the accordion a controlled component by passing the value prop to the Accordion component and setting the onValueChange prop to update the value prop. Refer to the controlled accordion example in the docs.
        </AccordionContentText>
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);
}