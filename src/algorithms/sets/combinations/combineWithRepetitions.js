/**
 * @param {*[]} comboOptions
 * @param {number} comboLength
 * @return {*[]}
 */
export default function combineWithRepetitions(comboOptions, comboLength) {
  console.log('In this frame combineWithRepetitions are comboOptions:', comboOptions, ' comboLength:', comboLength)
  // If the length of the combination is 1 then each element of the original array
  // is a combination itself.
  if (comboLength === 1) {
    console.log('comboOptions.map(comboOption => [comboOption]) is ', comboOptions.map(comboOption => [comboOption]));
    return comboOptions.map(comboOption => [comboOption]);
  }

  // Init combinations array.
  const combos = [];

  // Remember characters one by one and concatenate them to combinations of smaller lengths.
  // We don't extract elements here because the repetitions are allowed.
  comboOptions.forEach((currentOption, optionIndex) => {
    console.log('forEach of comboOptions with currentOption as ', currentOption, ' and optionIndex as ', optionIndex)
    // Generate combinations of smaller size.
    const smallerCombos = combineWithRepetitions(
      comboOptions.slice(optionIndex),
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

combineWithRepetitions(['rock', 'paper', 'scissors'], 3);