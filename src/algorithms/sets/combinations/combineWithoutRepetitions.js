/**
 * @param {*[]} comboOptions
 * @param {number} comboLength
 * @return {*[]}
 */
export default function combineWithoutRepetitions(comboOptions, comboLength) {
  console.log('In this frame combineWithRepetitions are comboOptions:', comboOptions, ' comboLength:', comboLength)
  // If the length of the combination is 1 then each element of the original array
  // is a combination itself.
  if (comboLength === 1) {
    console.log('comboOptions.map(comboOption => [comboOption]) is ', comboOptions.map(comboOption => [comboOption]));
    return comboOptions.map(comboOption => [comboOption]);
  }

  // Init combinations array.
  const combos = [];

  // Extract characters one by one and concatenate them to combinations of smaller lengths.
  // We need to extract them because we don't want to have repetitions after concatenation.
  comboOptions.forEach((currentOption, optionIndex) => {
    console.log('forEach of comboOptions with currentOption as ', currentOption, ' and optionIndex as ', optionIndex)
    // Generate combinations of smaller size.
    const smallerCombos = combineWithoutRepetitions(
      comboOptions.slice(optionIndex + 1),
      comboLength - 1,
    );

    console.log('moved back a frame and going into concatenation with smallerCombos as:', smallerCombos);

    // Concatenate currentOption with all combinations of smaller size.
    smallerCombos.forEach((smallerCombo) => {
      console.log('with currentOption ', currentOption, ' and smallerCombo:', smallerCombo) ;
      combos.push([currentOption].concat(smallerCombo));
      console.log('combos.push([currentOption].concat(smallerCombo)) is', combos);
    });
  });

  return combos;
}

console.log(combineWithoutRepetitions(['rock', 'paper', 'scissors'], 2));
