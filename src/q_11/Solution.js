function Solution(absolutes, signs) {
  console.log(
    absolutes.reduce(
      (acc, current, index) => acc + current * (signs[index] ? 1 : -1),
      0
    )
  );
}

Solution([4, 7, 12], [true, false, true]);
