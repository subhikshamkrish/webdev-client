/* eslint-disable prefer-const -- This exercise demonstrates variable declarations. */
export default function VariableTypes() {
  let numberVariable = 123;
  let floatingPointNumber = 234.345;
  let stringVariable = "Hello World!";
  let booleanVariable = true;
  let isNumber = typeof numberVariable;
  let isString = typeof stringVariable;
  let isBoolean = typeof booleanVariable;
  const course = "Web Development";
  const credits = 4;
  let sampleCount = 42;
  let sampleLabel = "Lab 3";
  return (
    <div id="wd-variable-types">
      <h4>Variables Types</h4>
      numberVariable = {numberVariable}           <br />
      floatingPointNumber = {floatingPointNumber} <br />
      stringVariable = {stringVariable}           <br />
      booleanVariable = {booleanVariable + ""}    <br />
      isNumber = {isNumber}                       <br />
      isString = {isString}                       <br />
      isBoolean = {isBoolean}
      <p>course = {course}; typeof course = {typeof course}</p>
      <p>credits = {credits}; typeof credits = {typeof credits}</p>
      <p>sampleCount = {sampleCount}; typeof sampleCount = {typeof sampleCount}</p>
      <p>sampleLabel = {sampleLabel}; typeof sampleLabel = {typeof sampleLabel}</p>
      <hr />
    </div>
  );
}
