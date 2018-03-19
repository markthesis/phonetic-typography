function variableType(input, weight, tall) {
  if (input == " ") {
    xPos += tracking;
  } else if (input == "a" || input == "A") {
    xPos += tracking;
    A(xPos, yPos, weight, tall);
    xPos += tracking;
  } else if (input == "b" || input == "B") {
    xPos += tracking;
    B(xPos, yPos, weight, tall);
    xPos += tracking;
  } else if (input == "c" || input == "C") {
    xPos += tracking;
    C(xPos, yPos, weight, tall);
    xPos += tracking;
  } else if (input == "d" || input == "D") {
    xPos += tracking;
    D(xPos, yPos, weight, tall);
    xPos += tracking;
  } else if (input == "e" || input == "E") {
    xPos += tracking;
    E(xPos, yPos, weight, tall);
    xPos += tracking;
  } else if (input == "f" || input == "F") {
    xPos += tracking;
    F(xPos, yPos, weight, tall);
    xPos += tracking;
  } else if (input == "g" || input == "G") {
    xPos += tracking;
    G(xPos, yPos, weight, tall);
    xPos += tracking;
  } else if (input == "h" || input == "H") {
    xPos += tracking;
    H(xPos, yPos, weight, tall);
    xPos += tracking;
  } else if (input == "i" || input == "I") {
    xPos += 0.5*tracking;
    I(xPos, yPos, weight, tall);
    xPos += 0.5*tracking;
  } else if (input == "j" || input == "J") {
    xPos += tracking;
    J(xPos, yPos, weight, tall);
    xPos += tracking;
  } else if (input == "k" || input == "K") {
    xPos += tracking;
    K(xPos, yPos, weight, tall);
    xPos += tracking;
  } else if (input == "l" || input == "L") {
    xPos += tracking;
    L(xPos, yPos, weight, tall);
    xPos += tracking;
  } else if (input == "m" || input == "M") {
    xPos += 1.35*tracking;
    M(xPos, yPos, weight, tall);
    xPos += 1.35*tracking;
  } else if (input == "n" || input == "N") {
    xPos += tracking;
    N(xPos, yPos, weight, tall);
    xPos += tracking;
  } else if (input == "o" || input == "O") {
    xPos += tracking;
    O(xPos, yPos, weight, tall);
    xPos += tracking;
  } else if (input == "p" || input == "P") {
    xPos += tracking;
    P(xPos, yPos, weight, tall);
    xPos += tracking;
  } else if (input == "q" || input == "Q") {
    xPos += tracking;
    Q(xPos, yPos, weight, tall);
    xPos += tracking;
  } else if (input == "r" || input == "R") {
    xPos += tracking;
    R(xPos, yPos, weight, tall);
    xPos += tracking;
  } else if (input == "s" || input == "S") {
    xPos += tracking;
    S(xPos, yPos, weight, tall);
    xPos += tracking;
  } else if (input == "t" || input == "T") {
    xPos += tracking;
    T(xPos, yPos, weight, tall);
    xPos += tracking;
  } else if (input == "u" || input == "U") {
    xPos += tracking;
    U(xPos, yPos, weight, tall);
    xPos += tracking;
  } else if (input == "v" || input == "V") {
    xPos += tracking;
    V(xPos, yPos, weight, tall);
    xPos += tracking;
  } else if (input == "w" || input == "W") {
    xPos += 1.35*tracking;
    W(xPos, yPos, weight, tall);
    xPos += 1.35*tracking;
  } else if (input == "x" || input == "X") {
    xPos += tracking;
    X(xPos, yPos, weight, tall);
    xPos += tracking;
  } else if (input == "y" || input == "Y") {
    xPos += tracking;
    Y(xPos, yPos, weight, tall);
    xPos += tracking;
  } else if (input == "z" || input == "Z") {
    xPos += tracking;
    Z(xPos, yPos, weight, tall);
    xPos += tracking;
  }
}

function A(x, y, weight, tall) {
  translate(x, y);

  beginShape();
  vertex(3*size - 1*weight, 0);
  vertex(9*size + 3*weight, 0);
  vertex(3*size + 2*weight, -30*size - 4*weight - 10*tall);
  vertex(-3*size - 2*weight, -30*size - 4*weight - 10*tall);
  vertex(-9*size - 3*weight, 0);
  vertex(-3*size + 1*weight, 0);
  vertex(-2.5*size + 0.5*weight, -4*size + 1*weight - 3*tall);
  vertex(2.5*size - 0.5*weight, -4*size + 1*weight - 3*tall);

  beginContour();
  vertex(1.5*size - 1*weight, -10*size - 3*weight - 3*tall);
  vertex(-1.5*size + 1*weight, -10*size - 3*weight - 3*tall);
  vertex(0, -20*size + 1*weight - 7*tall);
  endContour();

  endShape(CLOSE);

  translate(-x, -y);
}

function B(x, y, weight, tall) {
  translate(x, y);

  beginShape();
  vertex(2*size, 0);
  bezierVertex(6*size + 1*weight, 0,
    9*size + 2*weight, -3*size - 1*weight,
    9*size + 2*weight, -7*size - 2*weight);
    vertex(9*size + 2*weight, -10*size - 1*weight - 5*tall);
    bezierVertex(9*size + 2*weight, -12*size - 0.5*weight - 5*tall,
      8*size + 2*weight, -14*size - 2*weight - 5*tall,
      6*size + 2*weight, -15*size - 2*weight - 5*tall);
      bezierVertex(8*size + 2*weight, -16*size - 2*weight - 5*tall,
        9*size + 2*weight, -18*size - 2.5*weight - 5*tall,
        9*size + 2*weight, -20*size - 3*weight - 5*tall);
        vertex(9*size + 2*weight, -23*size - 2*weight - 10*tall);
        bezierVertex(9*size + 2*weight, -27*size - 3*weight - 10*tall,
          6*size + 1*weight, -30*size - 4*weight - 10*tall,
          2*size, -30*size - 4*weight - 10*tall);
          vertex(-9*size - 2*weight, -30*size - 4*weight - 10*tall);
          vertex(-9*size - 2*weight, 0);

          //top hole
          beginContour();
          vertex(size - 1*weight, -6*size - 4*weight);
          vertex(-3*size + 2*weight, -6*size - 4*weight);
          vertex(-3*size + 2*weight, -12*size - 5*tall);
          vertex(size - 1*weight, -12*size - 5*tall);
          bezierVertex(2.25*size - 0.75*weight, -12*size - 5*tall,
            3*size - 2*weight, -11.25*size + 0.75*weight - 5*tall,
            3*size - 2*weight, -10*size - 1*weight - 5*tall);
            vertex(3*size - 2*weight, -8*size - 3*weight);
            bezierVertex(3*size - 2*weight, -6.75*size - 3.75*weight,
              2.25*size - 1.75*weight, -6*size - 4*weight,
              size - 1*weight, -6*size - 4*weight);
              endContour();

              //bottom hole
              beginContour();
              vertex(size - 1*weight, -18*size - 4*weight - 5*tall);
              vertex(-3*size + 2*weight, -18*size - 4*weight - 5*tall);
              vertex(-3*size + 2*weight, -24*size - 10*tall);
              vertex(size - 1*weight, -24*size - 10*tall);
              bezierVertex(2.25*size - 0.75*weight, -24*size - 10*tall,
                3*size - 2*weight, -23.25*size + 0.75*weight - 10*tall,
                3*size - 2*weight, -22*size - 1*weight - 10*tall);
                vertex(3*size - 2*weight, -20*size - 3*weight - 5*tall);
                bezierVertex(3*size - 2*weight, -18.75*size - 3.75*weight - 5*tall,
                  2.25*size - 1.75*weight, -18*size - 4*weight - 5*tall,
                  size - 1*weight, -18*size - 4*weight - 5*tall);
                  endContour();

                  endShape(CLOSE);

                  translate(-x, -y);
                }

                function C(x, y, weight, tall) {
                  translate(x, y);

                  beginShape();
                  vertex(2*size, 0);
                  bezierVertex(6*size + weight, 0, 9*size + 2*weight, -3*size - weight,
                    9*size + 2*weight, -7*size - 2*weight);
                    vertex(9*size + 2*weight, -10*size - 2*weight - 3*tall);
                    vertex(3*size - 2*weight, -10*size - 2*weight - 3*tall);
                    vertex(3*size - 2*weight, -8*size - 3*weight);
                    bezierVertex(3*size - 2*weight, - 6.75*size - 3.75*weight,
                      2.25*size - 1.75*weight, -6*size - 4*weight,
                      size - weight, -6*size - 4*weight);
                      vertex(-size + weight, -6*size - 4*weight);
                      bezierVertex(-2.25*size + 1.75*weight, -6*size - 4*weight,
                        -3*size + 2*weight, - 6.75*size - 3.75*weight,
                        -3*size + 2*weight, -8*size - 3*weight);
                        vertex(-3*size + 2*weight, -22*size - weight - 10*tall);
                        bezierVertex(-3*size + 2*weight, -23.25*size - 0.25*weight - 10*tall,
                          -2.25*size + 1.75*weight, -24*size - 10*tall,
                          -size + weight, -24*size - 10*tall);
                          vertex(size - weight, -24*size - 10*tall);
                          bezierVertex(2.25*size - 1.75*weight, -24*size - 10*tall,
                            3*size - 2*weight, -23.25*size - 0.25*weight - 10*tall,
                            3*size - 2*weight, -22*size - weight - 10*tall);
                            vertex(3*size - 2*weight, -20*size - 2*weight - 7*tall);
                            vertex(9*size + 2*weight, -20*size - 2*weight - 7*tall);
                            vertex(9*size + 2*weight, -23*size - 2*weight - 10*tall);
                            bezierVertex(9*size + 2*weight, -27*size - 3*weight - 10*tall,
                              6*size + weight, -30*size - 4*weight - 10*tall,
                              2*size, -30*size - 4*weight - 10*tall);
                              vertex(-2*size, -30*size - 4*weight - 10*tall);
                              bezierVertex(-6*size - weight, -30*size - 4*weight - 10*tall,
                                -9*size - 2*weight, -27*size - 3*weight - 10*tall,
                                -9*size - 2*weight, -23*size - 2*weight - 10*tall);
                                vertex(-9*size - 2*weight, -7*size - 2*weight);
                                bezierVertex(-9*size - 2*weight, -3*size - weight, -6*size - weight, 0,
                                  -2*size, 0);
                                  endShape(CLOSE);

                                  translate(-x, -y);
                                }

                                function D(x, y, weight, tall) {
                                  translate(x, y);

                                  beginShape();
                                  vertex(2*size, 0);
                                  bezierVertex(6*size + weight, 0, 9*size + 2*weight, -3*size - weight,
                                    9*size + 2*weight, -7*size - 2*weight);
                                    vertex(9*size + 2*weight, -23*size - 2*weight - 10*tall);
                                    bezierVertex(9*size + 2*weight, -27*size - 3*weight - 10*tall,
                                      6*size + weight, -30*size - 4*weight - 10*tall,
                                      2*size, -30*size - 4*weight - 10*tall);
                                      vertex(-9*size - 2*weight, -30*size - 4*weight - 10*tall);
                                      vertex(-9*size - 2*weight, 0);

                                      beginContour();
                                      vertex(3*size - 2*weight, -8*size - 3*weight);
                                      bezierVertex(3*size - 2*weight, - 6.75*size - 3.75*weight,
                                        2.25*size - 1.75*weight, -6*size - 4*weight,
                                        size - weight, -6*size - 4*weight);
                                        vertex(-3*size + 2*weight, -6*size - 4*weight);
                                        vertex(-3*size + 2*weight, -24*size - 10*tall);
                                        vertex(size - weight, -24*size - 10*tall);
                                        bezierVertex(2.25*size - 1.75*weight, -24*size - 10*tall,
                                          3*size - 2*weight, -23.25*size - 0.25*weight - 10*tall,
                                          3*size - 2*weight, -22*size - weight - 10*tall);
                                          endContour();
                                          endShape(CLOSE);

                                          translate(-x, -y);
                                        }

                                        function E(x, y, weight, tall) {
                                          translate(x, y);

                                          beginShape();
                                          vertex(9*size + 2*weight, 0*size);
                                          vertex(9*size + 2*weight, -6*size - 4*weight);
                                          vertex(-3*size + 2*weight, -6*size - 4*weight);
                                          vertex(-3*size + 2*weight, -12*size - 5*tall);
                                          vertex(5*size + 2*weight, -12*size - 5*tall);
                                          vertex(5*size + 2*weight, -18*size - 4*weight - 5*tall);
                                          vertex(-3*size + 2*weight, -18*size - 4*weight - 5*tall);
                                          vertex(-3*size + 2*weight, -24*size - 10*tall);
                                          vertex(9*size + 2*weight, -24*size - 10*tall);
                                          vertex(9*size + 2*weight, -30*size - 4*weight - 10*tall);
                                          vertex(-9*size - 2*weight, -30*size - 4*weight - 10*tall);
                                          vertex(-9*size - 2*weight, 0*size);
                                          endShape(CLOSE);

                                          translate(-x, -y);
                                        }

                                        function F(x, y, weight, tall) {
                                          translate(x, y);

                                          beginShape();
                                          vertex(-3*size + 2*weight, 0*size);
                                          vertex(-3*size + 2*weight, -8*size - 5*tall);
                                          vertex(5*size + 2*weight, -8*size - 5*tall);
                                          vertex(5*size + 2*weight, -14*size - 4*weight - 5*tall);
                                          vertex(-3*size + 2*weight, -14*size - 4*weight - 5*tall);
                                          vertex(-3*size + 2*weight, -24*size - 10*tall);
                                          vertex(9*size + 2*weight, -24*size - 10*tall);
                                          vertex(9*size + 2*weight, -30*size - 4*weight - 10*tall);
                                          vertex(-9*size - 2*weight, -30*size - 4*weight - 10*tall);
                                          vertex(-9*size - 2*weight, 0*size);
                                          endShape(CLOSE);

                                          translate(-x, -y);
                                        }

                                        function G(x, y, weight, tall) {
                                          push();
                                          translate(x, y);

                                          beginShape();
                                          vertex(2*size, 0);
                                          bezierVertex(6*size + weight, 0, 9*size + 2*weight, -3*size - weight,
                                            9*size + 2*weight, -7*size - 2*weight);

                                            vertex(9*size + 2*weight, -17*size - 4*weight - 5*tall);
                                            vertex(0, -17*size - 4*weight - 5*tall);
                                            vertex(0, -11*size - 0*weight - 5*tall);
                                            vertex(3*size - 2*weight, -11*size - 0*weight - 5*tall);

                                            vertex(3*size - 2*weight, -8*size - 3*weight);
                                            bezierVertex(3*size - 2*weight, - 6.75*size - 3.75*weight,
                                              2.25*size - 1.75*weight, -6*size - 4*weight,
                                              size - weight, -6*size - 4*weight);
                                              vertex(-size + weight, -6*size - 4*weight);
                                              bezierVertex(-2.25*size + 1.75*weight, -6*size - 4*weight,
                                                -3*size + 2*weight, - 6.75*size - 3.75*weight,
                                                -3*size + 2*weight, -8*size - 3*weight);
                                                vertex(-3*size + 2*weight, -22*size - weight - 10*tall);
                                                bezierVertex(-3*size + 2*weight, -23.25*size - 0.25*weight - 10*tall,
                                                  -2.25*size + 1.75*weight, -24*size - 10*tall,
                                                  -size + weight, -24*size - 10*tall);
                                                  vertex(size - weight, -24*size - 10*tall);
                                                  bezierVertex(2.25*size - 1.75*weight, -24*size - 10*tall,
                                                    3*size - 2*weight, -23.25*size - 0.25*weight - 10*tall,
                                                    3*size - 2*weight, -22*size - weight - 10*tall);
                                                    vertex(3*size - 2*weight, -20*size - 2*weight - 7*tall);
                                                    vertex(9*size + 2*weight, -20*size - 2*weight - 7*tall);
                                                    vertex(9*size + 2*weight, -23*size - 2*weight - 10*tall);
                                                    bezierVertex(9*size + 2*weight, -27*size - 3*weight - 10*tall,
                                                      6*size + weight, -30*size - 4*weight - 10*tall,
                                                      2*size, -30*size - 4*weight - 10*tall);
                                                      vertex(-2*size, -30*size - 4*weight - 10*tall);
                                                      bezierVertex(-6*size - weight, -30*size - 4*weight - 10*tall,
                                                        -9*size - 2*weight, -27*size - 3*weight - 10*tall,
                                                        -9*size - 2*weight, -23*size - 2*weight - 10*tall);
                                                        vertex(-9*size - 2*weight, -7*size - 2*weight);
                                                        bezierVertex(-9*size - 2*weight, -3*size - weight, -6*size - weight, 0,
                                                          -2*size, 0);
                                                          endShape(CLOSE);
                                                          pop();
                                                        }

                                                        function H(x, y, weight, tall) {
                                                          push();
                                                          translate(x, y);

                                                          beginShape();
                                                          vertex(-3*size + 2*weight, 0*size);
                                                          vertex(-3*size + 2*weight, -12*size - 5*tall);
                                                          vertex(3*size - 2*weight, -12*size - 5*tall);
                                                          vertex(3*size - 2*weight, 0*size);
                                                          vertex(3*size - 2*weight, 0*size);
                                                          vertex(9*size + 2*weight, 0*size);
                                                          vertex(9*size + 2*weight, -30*size - 4*weight - 10*tall);
                                                          vertex(3*size - 2*weight, -30*size - 4*weight - 10*tall);
                                                          vertex(3*size - 2*weight, -18*size - 4*weight - 5*tall);
                                                          vertex(-3*size + 2*weight, -18*size - 4*weight - 5*tall);
                                                          vertex(-3*size + 2*weight, -30*size - 4*weight - 10*tall);
                                                          vertex(-9*size - 2*weight, -30*size - 4*weight - 10*tall);
                                                          vertex(-9*size - 2*weight, 0*size);
                                                          endShape(CLOSE);

                                                          pop();
                                                        }

                                                        function I(x, y, weight, tall) {
                                                          push();
                                                          translate(x, y);

                                                          beginShape();
                                                          vertex(3*size + 2*weight, 0*size);
                                                          vertex(3*size + 2*weight, -30*size - 4*weight - 10*tall);
                                                          vertex(-3*size - 2*weight, -30*size - 4*weight - 10*tall);
                                                          vertex(-3*size - 2*weight, 0*size);
                                                          endShape(CLOSE);

                                                          pop();
                                                        }

                                                        function J(x, y, weight, tall) {
                                                          translate(x, y);

                                                          beginShape();
                                                          vertex(2*size, 0);
                                                          bezierVertex(6*size + weight, 0,
                                                            9*size + 2*weight, -3*size - weight,
                                                            9*size + 2*weight, -7*size - 2*weight);
                                                            vertex(9*size + 2*weight, -30*size - 4*weight - 10*tall);
                                                            vertex(3*size - 2*weight, -30*size - 4*weight - 10*tall);
                                                            vertex(3*size - 2*weight, -8*size - 3*weight);
                                                            bezierVertex(3*size - 2*weight, - 6.75*size - 3.75*weight,
                                                              2.25*size - 1.75*weight, -6*size - 4*weight,
                                                              size - weight, -6*size - 4*weight);
                                                              vertex(-size + weight, -6*size - 4*weight);
                                                              bezierVertex(-2.25*size + 1.75*weight, -6*size - 4*weight,
                                                                -3*size + 2*weight, - 6.75*size - 3.75*weight,
                                                                -3*size + 2*weight, -8*size - 3*weight);
                                                                vertex(-3*size + 2*weight, -15*size - 2*weight - 5*tall);
                                                                vertex(-9*size - 2*weight, -15*size - 2*weight - 5*tall);
                                                                vertex(-9*size - 2*weight, -7*size - 2*weight);
                                                                bezierVertex(-9*size - 2*weight, -3*size - weight,
                                                                  -6*size - weight, 0,
                                                                  -2*size, 0);
                                                                  endShape(CLOSE);

                                                                  translate(-x, -y);
                                                                }

                                                                function K(x, y, weight, tall) {
                                                                  translate(x, y);

                                                                  beginShape();
                                                                  vertex(2.5*size - 2*weight, 0);
                                                                  vertex(9*size + 2*weight, 0);
                                                                  vertex(size + 5*weight, -15*size - 2*weight - 5*tall);
                                                                  vertex(9*size + 2*weight, -30*size - 4*weight - 10*tall);
                                                                  vertex(2.5*size - 2*weight, -30*size - 4*weight - 10*tall);

                                                                  vertex(-3*size + 2*weight, -20*size - 5*weight - 5.5*tall);
                                                                  vertex(-3*size + 2*weight, -30*size - 4*weight - 10*tall);
                                                                  vertex(-9*size - 2*weight, -30*size - 4*weight - 10*tall);
                                                                  vertex(-9*size - 2*weight, 0);
                                                                  vertex(-3*size + 2*weight, 0);
                                                                  vertex(-3*size + 2*weight, -10*size + weight - 4.5*tall);
                                                                  endShape(CLOSE);

                                                                  translate(-x, -y);
                                                                }

                                                                function L(x, y, weight, tall) {
                                                                  translate(x, y);

                                                                  beginShape();
                                                                  vertex(9*size + 2*weight, 0*size);
                                                                  vertex(9*size + 2*weight, -6*size - 4*weight);
                                                                  vertex(-3*size + 2*weight, -6*size - 4*weight);
                                                                  vertex(-3*size + 2*weight, -30*size - 4*weight - 10*tall);
                                                                  vertex(-9*size - 2*weight, -30*size - 4*weight - 10*tall);
                                                                  vertex(-9*size - 2*weight, 0*size);
                                                                  endShape(CLOSE);

                                                                  translate(-x, -y);
                                                                }

                                                                function M(x, y, weight, tall) {
                                                                  translate(x, y);

                                                                  beginShape();
                                                                  vertex(2.5*size + 1*weight, 0*size);
                                                                  vertex(6*size - 1*weight, -16*size + 6*weight - 9*tall);
                                                                  vertex(6*size - 1*weight, 0*size);
                                                                  vertex(12*size + 3*weight, 0*size);
                                                                  vertex(12*size + 3*weight, -30*size - 4*weight - 10*tall);
                                                                  vertex(4*size - 2*weight, -30*size - 4*weight - 10*tall);

                                                                  vertex(0*size, -13*size - 11*weight - 2*tall);

                                                                  vertex(-4*size + 2*weight, -30*size - 4*weight - 10*tall);
                                                                  vertex(-12*size - 3*weight, -30*size - 4*weight - 10*tall);
                                                                  vertex(-12*size - 3*weight, 0*size);
                                                                  vertex(-6*size + 1*weight, 0*size);
                                                                  vertex(-6*size + 1*weight, -16*size + 6*weight - 9*tall);
                                                                  vertex(-2.5*size - 1*weight, 0*size);
                                                                  endShape(CLOSE);

                                                                  translate(-x, -y);
                                                                }

                                                                function N(x, y, weight, tall) {
                                                                  translate(x, y);

                                                                  beginShape();
                                                                  vertex(5*size - 0.5*weight, 0*size);
                                                                  vertex(9*size + 2*weight, 0*size);
                                                                  vertex(9*size + 2*weight, -30*size - 4*weight - 10*tall);
                                                                  vertex(3*size - 2*weight, -30*size - 4*weight - 10*tall);
                                                                  vertex(3*size - 2*weight, -15*size - 10*weight - 2.5*tall);
                                                                  vertex(-5*size + 0.5*weight, -30*size - 4*weight - 10*tall);
                                                                  vertex(-9*size - 2*weight, -30*size - 4*weight - 10*tall);
                                                                  vertex(-9*size - 2*weight, 0*size);
                                                                  vertex(-3*size + 2*weight, 0*size);
                                                                  vertex(-3*size + 2*weight, -15*size + 6*weight - 7.5*tall);
                                                                  endShape(CLOSE);

                                                                  translate(-x, -y);
                                                                }

                                                                function O(x, y, weight, tall) {
                                                                  translate(x, y);

                                                                  beginShape();
                                                                  vertex(2*size, 0);
                                                                  bezierVertex(6*size + weight, 0, 9*size + 2*weight, -3*size - weight,
                                                                    9*size + 2*weight, -7*size - 2*weight);
                                                                    vertex(9*size + 2*weight, -23*size - 2*weight - 10*tall);
                                                                    bezierVertex(9*size + 2*weight, -27*size - 3*weight - 10*tall,
                                                                      6*size + weight, -30*size - 4*weight - 10*tall,
                                                                      2*size, -30*size - 4*weight - 10*tall);
                                                                      vertex(-2*size, -30*size - 4*weight - 10*tall);
                                                                      bezierVertex(-6*size - weight, -30*size - 4*weight - 10*tall,
                                                                        -9*size - 2*weight, -27*size - 3*weight - 10*tall,
                                                                        -9*size - 2*weight, -23*size - 2*weight - 10*tall);
                                                                        vertex(-9*size - 2*weight, -7*size - 2*weight);
                                                                        bezierVertex(-9*size - 2*weight, -3*size - weight, -6*size - weight, 0,
                                                                          -2*size, 0);

                                                                          beginContour();

                                                                          vertex(3*size - 2*weight, -8*size - 3*weight);
                                                                          bezierVertex(3*size - 2*weight, - 6.75*size - 3.75*weight,
                                                                            2.25*size - 1.75*weight, -6*size - 4*weight,
                                                                            size - weight, -6*size - 4*weight);
                                                                            vertex(-size + weight, -6*size - 4*weight);
                                                                            bezierVertex(-2.25*size + 1.75*weight, -6*size - 4*weight,
                                                                              -3*size + 2*weight, - 6.75*size - 3.75*weight,
                                                                              -3*size + 2*weight, -8*size - 3*weight);
                                                                              vertex(-3*size + 2*weight, -22*size - weight - 10*tall);
                                                                              bezierVertex(-3*size + 2*weight, -23.25*size - 0.25*weight - 10*tall,
                                                                                -2.25*size + 1.75*weight, -24*size - 10*tall,
                                                                                -size + weight, -24*size - 10*tall);
                                                                                vertex(size - weight, -24*size - 10*tall);
                                                                                bezierVertex(2.25*size - 1.75*weight, -24*size - 10*tall,
                                                                                  3*size - 2*weight, -23.25*size - 0.25*weight - 10*tall,
                                                                                  3*size - 2*weight, -22*size - weight - 10*tall);
                                                                                  endContour();
                                                                                  endShape(CLOSE);

                                                                                  translate(-x, -y);
                                                                                }

                                                                                function P(x, y, weight, tall) {
                                                                                  translate(x, y);

                                                                                  beginShape();
                                                                                  vertex(-3*size + 2*weight, 0);
                                                                                  vertex(-3*size + 2*weight, -8*size - 5*tall);
                                                                                  vertex(2*size, -8*size - 5*tall);
                                                                                  bezierVertex(6*size + weight, -8*size - 5*tall,
                                                                                    9*size + 2*weight, -11*size - weight - 5*tall,
                                                                                    9*size + 2*weight, -15*size - 2*weight - 5*tall);
                                                                                    vertex(9*size + 2*weight, -23*size - 2*weight - 10*tall);
                                                                                    bezierVertex(9*size + 2*weight, -27*size - 3*weight - 10*tall,
                                                                                      6*size + weight, -30*size - 4*weight - 10*tall,
                                                                                      2*size, -30*size - 4*weight - 10*tall);
                                                                                      vertex(-9*size - 2*weight, -30*size - 4*weight - 10*tall);
                                                                                      vertex(-9*size - 2*weight, 0);

                                                                                      beginContour();
                                                                                      vertex(3*size - 2*weight, -16*size - 3*weight - 5*tall);
                                                                                      bezierVertex(3*size - 2*weight, - 14.75*size - 3.75*weight - 5*tall,
                                                                                        2.25*size - 1.75*weight, -14*size - 4*weight - 5*tall,
                                                                                        size - weight, -14*size - 4*weight - 5*tall);
                                                                                        vertex(-3*size + 2*weight, -14*size - 4*weight - 5*tall);
                                                                                        vertex(-3*size + 2*weight, -24*size - 10*tall);
                                                                                        vertex(size - weight, -24*size - 10*tall);
                                                                                        bezierVertex(2.25*size - 1.75*weight, -24*size - 10*tall,
                                                                                          3*size - 2*weight, -23.25*size - 0.25*weight - 10*tall,
                                                                                          3*size - 2*weight, -22*size - weight - 10*tall);
                                                                                          endContour();
                                                                                          endShape(CLOSE);

                                                                                          translate(-x, -y);
                                                                                        }

                                                                                        function Q(x, y, weight, tall) {
                                                                                          translate(x, y);

                                                                                          beginShape();
                                                                                          vertex(0 - 0.5*weight, 0);
                                                                                          vertex(6*size, 5*size + 0.5*weight);
                                                                                          vertex(9*size + 2*weight, size - 2*weight);
                                                                                          vertex(6*size + 3*weight, -size - weight);
                                                                                          bezierVertex(8*size + 3*weight, -2*size - 2*weight,
                                                                                            9*size + 2*weight, -3*size - weight,
                                                                                            9*size + 2*weight, -7*size - 2*weight);

                                                                                            vertex(9*size + 2*weight, -23*size - 2*weight - 10*tall);
                                                                                            bezierVertex(9*size + 2*weight, -27*size - 3*weight - 10*tall,
                                                                                              6*size + weight, -30*size - 4*weight - 10*tall,
                                                                                              2*size, -30*size - 4*weight - 10*tall);
                                                                                              vertex(-2*size, -30*size - 4*weight - 10*tall);
                                                                                              bezierVertex(-6*size - weight, -30*size - 4*weight - 10*tall,
                                                                                                -9*size - 2*weight, -27*size - 3*weight - 10*tall,
                                                                                                -9*size - 2*weight, -23*size - 2*weight - 10*tall);
                                                                                                vertex(-9*size - 2*weight, -7*size - 2*weight);
                                                                                                bezierVertex(-9*size - 2*weight, -3*size - weight, -6*size - weight, 0,
                                                                                                  -2*size, 0);

                                                                                                  beginContour();

                                                                                                  vertex(3*size - 2*weight, -8*size - 3*weight);
                                                                                                  bezierVertex(3*size - 2*weight, - 6.75*size - 3.75*weight,
                                                                                                    2.25*size - 1.75*weight, -6*size - 4*weight,
                                                                                                    size - weight, -6*size - 4*weight);
                                                                                                    vertex(-size + weight, -6*size - 4*weight);
                                                                                                    bezierVertex(-2.25*size + 1.75*weight, -6*size - 4*weight,
                                                                                                      -3*size + 2*weight, - 6.75*size - 3.75*weight,
                                                                                                      -3*size + 2*weight, -8*size - 3*weight);
                                                                                                      vertex(-3*size + 2*weight, -22*size - weight - 10*tall);
                                                                                                      bezierVertex(-3*size + 2*weight, -23.25*size - 0.25*weight - 10*tall,
                                                                                                        -2.25*size + 1.75*weight, -24*size - 10*tall,
                                                                                                        -size + weight, -24*size - 10*tall);
                                                                                                        vertex(size - weight, -24*size - 10*tall);
                                                                                                        bezierVertex(2.25*size - 1.75*weight, -24*size - 10*tall,
                                                                                                          3*size - 2*weight, -23.25*size - 0.25*weight - 10*tall,
                                                                                                          3*size - 2*weight, -22*size - weight - 10*tall);
                                                                                                          endContour();
                                                                                                          endShape(CLOSE);

                                                                                                          translate(-x, -y);
                                                                                                        }

                                                                                                        function R(x, y, weight, tall) {
                                                                                                          translate(x, y);

                                                                                                          beginShape();
                                                                                                          vertex(3*size - 2*weight, 0);
                                                                                                          vertex(9*size + 2*weight, 0);
                                                                                                          vertex(9*size + 2*weight, -10*size - 1*weight - 5*tall);

                                                                                                          //valley
                                                                                                          bezierVertex(9*size + 2*weight, -12*size - 0.5*weight - 5*tall,
                                                                                                            8*size + 2*weight, -14*size - 2*weight - 5*tall,
                                                                                                            6*size + 2*weight, -15*size - 2*weight - 5*tall);
                                                                                                            bezierVertex(8*size + 2*weight, -16*size - 2*weight - 5*tall,
                                                                                                              9*size + 2*weight, -18*size - 2.5*weight - 5*tall,
                                                                                                              9*size + 2*weight, -20*size - 3*weight - 5*tall);

                                                                                                              vertex(9*size + 2*weight, -23*size - 2*weight - 10*tall);
                                                                                                              bezierVertex(9*size + 2*weight, -27*size - 3*weight - 10*tall,
                                                                                                                6*size + 1*weight, -30*size - 4*weight - 10*tall,
                                                                                                                2*size, -30*size - 4*weight - 10*tall);
                                                                                                                vertex(-9*size - 2*weight, -30*size - 4*weight - 10*tall);
                                                                                                                vertex(-9*size - 2*weight, 0);
                                                                                                                vertex(-3*size + 2*weight, 0);
                                                                                                                vertex(-3*size + 2*weight, -12*size - 5*tall);
                                                                                                                vertex(size - 1*weight, -12*size - 5*tall);
                                                                                                                bezierVertex(2.25*size - 0.75*weight, -12*size - 5*tall,
                                                                                                                  3*size - 2*weight, -11.25*size + 0.75*weight - 5*tall,
                                                                                                                  3*size - 2*weight, -10*size - 1*weight - 5*tall);

                                                                                                                  //top hole
                                                                                                                  beginContour();
                                                                                                                  vertex(size - 1*weight, -18*size - 4*weight - 5*tall);
                                                                                                                  vertex(-3*size + 2*weight, -18*size - 4*weight - 5*tall);
                                                                                                                  vertex(-3*size + 2*weight, -24*size - 10*tall);
                                                                                                                  vertex(size - 1*weight, -24*size - 10*tall);
                                                                                                                  bezierVertex(2.25*size - 0.75*weight, -24*size - 10*tall,
                                                                                                                    3*size - 2*weight, -23.25*size + 0.75*weight - 10*tall,
                                                                                                                    3*size - 2*weight, -22*size - 1*weight - 10*tall);
                                                                                                                    vertex(3*size - 2*weight, -20*size - 3*weight - 5*tall);
                                                                                                                    bezierVertex(3*size - 2*weight, -18.75*size - 3.75*weight - 5*tall,
                                                                                                                      2.25*size - 1.75*weight, -18*size - 4*weight - 5*tall,
                                                                                                                      size - 1*weight, -18*size - 4*weight - 5*tall);
                                                                                                                      endContour();

                                                                                                                      endShape(CLOSE);

                                                                                                                      translate(-x, -y);
                                                                                                                    }

                                                                                                                    function S(x, y, weight, tall) {
                                                                                                                      translate(x, y);

                                                                                                                      beginShape();
                                                                                                                      vertex(2*size, 0);

                                                                                                                      //outer bottom right
                                                                                                                      bezierVertex(6*size + weight, 0, 9*size + 2*weight, -3*size - weight,
                                                                                                                        9*size + 2*weight, -7*size - 2*weight);
                                                                                                                        vertex(9*size + 2*weight, -10*size - 2*weight - 4.5*tall);

                                                                                                                        //>>>>>>>>>>>>>start right curve here

                                                                                                                        bezierVertex(9*size + 2*weight, -13*size - 2*weight - 5*tall,
                                                                                                                          7*size + 2*weight, -15*size - 3*weight - 5*tall,
                                                                                                                          5*size + 2*weight + 0.375*tall, -16*size - 3*weight - 4.8*tall);

                                                                                                                          vertex(-size + 2.5*weight - 0.1*tall, -18.5*size - 3*weight - 6.5*tall);

                                                                                                                          bezierVertex(-2*size + 2.5*weight, -19*size - 3*weight - 6.5*tall,
                                                                                                                            -3*size + 2*weight, -19.5*size - 3*weight - 6.5*tall,
                                                                                                                            -3*size + 2*weight, -20.5*size - 3*weight - 7*tall);

                                                                                                                            //>>>>>>>>>>>>>end right curve here

                                                                                                                            vertex(-3*size + 2*weight, -22*size - weight - 10*tall);
                                                                                                                            //inner top left
                                                                                                                            bezierVertex(-3*size + 2*weight, -23.25*size - 0.25*weight - 10*tall,
                                                                                                                              -2.25*size + 1.75*weight, -24*size - 10*tall,
                                                                                                                              -size + weight, -24*size - 10*tall);
                                                                                                                              vertex(size - weight, -24*size - 10*tall);

                                                                                                                              //inner top right
                                                                                                                              bezierVertex(2.25*size - 1.75*weight, -24*size - 10*tall,
                                                                                                                                3*size - 2*weight, -23.25*size - 0.25*weight - 10*tall,
                                                                                                                                3*size - 2*weight, -22*size - weight - 10*tall);

                                                                                                                                vertex(3*size - 2*weight, -20*size - 2*weight - 7*tall);
                                                                                                                                vertex(9*size + 2*weight, -20*size - 2*weight - 7*tall);
                                                                                                                                vertex(9*size + 2*weight, -23*size - 2*weight - 10*tall);

                                                                                                                                //outer top right
                                                                                                                                bezierVertex(9*size + 2*weight, -27*size - 3*weight - 10*tall,
                                                                                                                                  6*size + weight, -30*size - 4*weight - 10*tall,
                                                                                                                                  2*size, -30*size - 4*weight - 10*tall);
                                                                                                                                  vertex(-2*size, -30*size - 4*weight - 10*tall);

                                                                                                                                  //outer top left
                                                                                                                                  bezierVertex(-6*size - weight, -30*size - 4*weight - 10*tall,
                                                                                                                                    -9*size - 2*weight, -27*size - 3*weight - 10*tall,
                                                                                                                                    -9*size - 2*weight, -23*size - 2*weight - 10*tall);

                                                                                                                                    vertex(-9*size - 2*weight, -20*size - 2*weight - 7.5*tall);

                                                                                                                                    //>>>>>>>>>>>>>start left curve here

                                                                                                                                    bezierVertex(-9*size - 2*weight, -17*size - 1*weight - 6*tall,
                                                                                                                                      -7*size - 2.4*weight - 0.4*tall, -15*size - 1.5*weight - 7*tall,
                                                                                                                                      -5*size - 1.5*weight + 0.05*tall, -14*size - 0.4*weight - 6.0*tall);

                                                                                                                                      vertex(size - 1.5*weight + 0*tall, -11*size - 5.3*tall);

                                                                                                                                      bezierVertex(2*size - 2*weight + 0.2*tall, -10.5*size + 0*weight - 4.7*tall,
                                                                                                                                        3*size - 2*weight -0.0*tall, -10*size - 4*tall,
                                                                                                                                        3*size - 2*weight, -9*size - 0*weight - 4*tall);

                                                                                                                                        //>>>>>>>>>>>>>end left curve here

                                                                                                                                        vertex(3*size - 2*weight, -8*size - 3*weight);

                                                                                                                                        //inner bottom right
                                                                                                                                        bezierVertex(3*size - 2*weight, - 6.75*size - 3.75*weight,
                                                                                                                                          2.25*size - 1.75*weight, -6*size - 4*weight,
                                                                                                                                          size - weight, -6*size - 4*weight);

                                                                                                                                          vertex(-size + weight, -6*size - 4*weight);

                                                                                                                                          //inner bottom left
                                                                                                                                          bezierVertex(-2.25*size + 1.75*weight, -6*size - 4*weight,
                                                                                                                                            -3*size + 2*weight, - 6.75*size - 3.75*weight,
                                                                                                                                            -3*size + 2*weight, -8*size - 3*weight);

                                                                                                                                            vertex(-3*size + 2*weight, -10*size - 1.5*weight - 4*tall);
                                                                                                                                            vertex(-9*size - 2*weight, -10*size - 1.5*weight - 4*tall);
                                                                                                                                            vertex(-9*size - 2*weight, -7*size - 2*weight);

                                                                                                                                            //outer bottom left
                                                                                                                                            bezierVertex(-9*size - 2*weight, -3*size - weight,
                                                                                                                                              -6*size - weight, 0,
                                                                                                                                              -2*size, 0);
                                                                                                                                              endShape(CLOSE);

                                                                                                                                              translate(-x, -y);
                                                                                                                                            }

                                                                                                                                            function T(x, y, weight, tall) {
                                                                                                                                              translate(x, y);

                                                                                                                                              beginShape();
                                                                                                                                              vertex(3*size + 2*weight, 0*size);
                                                                                                                                              vertex(3*size + 2*weight, -24*size - 10*tall);
                                                                                                                                              vertex(9*size + 2*weight, -24*size - 10*tall);
                                                                                                                                              vertex(9*size + 2*weight, -30*size - 4*weight - 10*tall);
                                                                                                                                              vertex(-9*size - 2*weight, -30*size - 4*weight - 10*tall);
                                                                                                                                              vertex(-9*size - 2*weight, -24*size - 10*tall);
                                                                                                                                              vertex(-3*size - 2*weight, -24*size - 10*tall);
                                                                                                                                              vertex(-3*size - 2*weight, 0*size);
                                                                                                                                              endShape(CLOSE);

                                                                                                                                              translate(-x, -y);
                                                                                                                                            }

                                                                                                                                            function U(x, y, weight, tall) {
                                                                                                                                              translate(x, y);

                                                                                                                                              beginShape();
                                                                                                                                              vertex(2*size, 0);
                                                                                                                                              bezierVertex(6*size + weight, 0,
                                                                                                                                                9*size + 2*weight, -3*size - weight,
                                                                                                                                                9*size + 2*weight, -7*size - 2*weight);
                                                                                                                                                vertex(9*size + 2*weight, -30*size - 4*weight - 10*tall);
                                                                                                                                                vertex(3*size - 2*weight, -30*size - 4*weight - 10*tall);
                                                                                                                                                vertex(3*size - 2*weight, -8*size - 3*weight);
                                                                                                                                                bezierVertex(3*size - 2*weight, - 6.75*size - 3.75*weight,
                                                                                                                                                  2.25*size - 1.75*weight, -6*size - 4*weight,
                                                                                                                                                  size - weight, -6*size - 4*weight);
                                                                                                                                                  vertex(-size + weight, -6*size - 4*weight);
                                                                                                                                                  bezierVertex(-2.25*size + 1.75*weight, -6*size - 4*weight,
                                                                                                                                                    -3*size + 2*weight, - 6.75*size - 3.75*weight,
                                                                                                                                                    -3*size + 2*weight, -8*size - 3*weight);
                                                                                                                                                    vertex(-3*size + 2*weight, -30*size - 4*weight - 10*tall);
                                                                                                                                                    vertex(-9*size - 2*weight, -30*size - 4*weight - 10*tall);
                                                                                                                                                    vertex(-9*size - 2*weight, -7*size - 2*weight);
                                                                                                                                                    bezierVertex(-9*size - 2*weight, -3*size - weight,
                                                                                                                                                      -6*size - weight, 0,
                                                                                                                                                      -2*size, 0);
                                                                                                                                                      endShape(CLOSE);

                                                                                                                                                      translate(-x, -y);
                                                                                                                                                    }

                                                                                                                                                    function V(x, y, weight, tall) {
                                                                                                                                                      translate(x, y);

                                                                                                                                                      beginShape();
                                                                                                                                                      vertex(3*size + 2*weight, 0*size);
                                                                                                                                                      vertex(9.5*size + 2.5*weight, -30*size - 4*weight - 10*tall);
                                                                                                                                                      vertex(3*size - 2*weight, -30*size - 4*weight - 10*tall);
                                                                                                                                                      vertex(0, -10*size - 7*weight);
                                                                                                                                                      vertex(-3*size + 2*weight, -30*size - 4*weight - 10*tall);
                                                                                                                                                      vertex(-9.5*size - 2.5*weight, -30*size - 4*weight - 10*tall);
                                                                                                                                                      vertex(-3*size - 2*weight, 0*size);
                                                                                                                                                      endShape(CLOSE);

                                                                                                                                                      translate(-x, -y);
                                                                                                                                                    }

                                                                                                                                                    function W(x, y, weight, tall) {
                                                                                                                                                      translate(x, y);

                                                                                                                                                      beginShape();
                                                                                                                                                      vertex(0, -17*size + 6*weight - 8*tall);

                                                                                                                                                      vertex(2.5*size - 1.5*weight, 0);
                                                                                                                                                      vertex(9*size + 3*weight, 0);
                                                                                                                                                      vertex(12*size + 3*weight, -30*size - 4*weight - 10*tall);
                                                                                                                                                      vertex(6*size - 1*weight, -30*size - 4*weight - 10*tall);
                                                                                                                                                      vertex(5*size, -12*size - 7*weight);
                                                                                                                                                      vertex(2.5*size + 1.5*weight, -30*size - 4*weight - 10*tall);

                                                                                                                                                      vertex(-2.5*size - 1.5*weight, -30*size - 4*weight - 10*tall);
                                                                                                                                                      vertex(-5*size, -12*size - 7*weight);
                                                                                                                                                      vertex(-6*size + 1*weight, -30*size - 4*weight - 10*tall);
                                                                                                                                                      vertex(-12*size - 3*weight, -30*size - 4*weight - 10*tall);
                                                                                                                                                      vertex(-9*size - 3*weight, 0);
                                                                                                                                                      vertex(-2.5*size + 1.5*weight, 0);
                                                                                                                                                      endShape(CLOSE);

                                                                                                                                                      translate(-x, -y);
                                                                                                                                                    }

                                                                                                                                                    function X(x, y, weight, tall) {
                                                                                                                                                      translate(x, y);

                                                                                                                                                      beginShape();
                                                                                                                                                      vertex(9.5*size + 2.5*weight, 0*size);
                                                                                                                                                      vertex(3*size + 2*weight, -15*size - 2*weight - 5*tall);
                                                                                                                                                      vertex(9.5*size + 2.5*weight, -30*size - 4*weight - 10*tall);
                                                                                                                                                      vertex(3*size - 2*weight, -30*size - 4*weight - 10*tall);
                                                                                                                                                      vertex(0, -22*size - 6.5*weight - 6*tall);
                                                                                                                                                      vertex(-3*size + 2*weight, -30*size - 4*weight - 10*tall);
                                                                                                                                                      vertex(-9.5*size - 2.5*weight, -30*size - 4*weight - 10*tall);
                                                                                                                                                      vertex(-3*size - 2*weight, -15*size - 2*weight - 5*tall);
                                                                                                                                                      vertex(-9.5*size - 2.5*weight, 0*size);
                                                                                                                                                      vertex(-3*size + 2*weight, 0*size);
                                                                                                                                                      vertex(0, -8*size + 2.5*weight - 4*tall);
                                                                                                                                                      vertex(3*size - 2*weight, 0*size);

                                                                                                                                                      endShape(CLOSE);

                                                                                                                                                      translate(-x, -y);
                                                                                                                                                    }

                                                                                                                                                    function Y(x, y, weight, tall) {
                                                                                                                                                      translate(x, y);

                                                                                                                                                      beginShape();
                                                                                                                                                      vertex(3*size + 2*weight, 0*size);
                                                                                                                                                      vertex(3*size + 2*weight, -12*size - 2*weight - 5*tall);
                                                                                                                                                      vertex(9.5*size + 2.5*weight, -30*size - 4*weight - 10*tall);
                                                                                                                                                      vertex(3*size - 2*weight, -30*size - 4*weight - 10*tall);
                                                                                                                                                      vertex(0, -19*size - 7*weight - 5*tall);
                                                                                                                                                      vertex(-3*size + 2*weight, -30*size - 4*weight - 10*tall);
                                                                                                                                                      vertex(-9.5*size - 2.5*weight, -30*size - 4*weight - 10*tall);
                                                                                                                                                      vertex(-3*size - 2*weight, -12*size - 2*weight - 5*tall);
                                                                                                                                                      vertex(-3*size - 2*weight, 0*size);
                                                                                                                                                      endShape(CLOSE);

                                                                                                                                                      translate(-x, -y);
                                                                                                                                                    }

                                                                                                                                                    function Z(x, y, weight, tall) {
                                                                                                                                                      translate(x, y);

                                                                                                                                                      beginShape();
                                                                                                                                                      vertex(9*size + 2*weight, 0*size);
                                                                                                                                                      vertex(9*size + 2*weight, -6*size - 4*weight);
                                                                                                                                                      vertex(-2*size + 3*weight, -6*size - 4*weight);
                                                                                                                                                      vertex(9*size + 2*weight, -25*size - 1*weight - 10*tall);
                                                                                                                                                      vertex(9*size + 2*weight, -30*size - 4*weight - 10*tall);
                                                                                                                                                      vertex(-9*size - 2*weight, -30*size - 4*weight - 10*tall);
                                                                                                                                                      vertex(-9*size - 2*weight, -24*size - 10*tall);
                                                                                                                                                      vertex(2*size - 3*weight, -24*size - 10*tall);
                                                                                                                                                      vertex(-9*size - 2*weight, -5*size - 3*weight);
                                                                                                                                                      vertex(-9*size - 2*weight, 0*size);
                                                                                                                                                      endShape(CLOSE);

                                                                                                                                                      translate(-x, -y);
                                                                                                                                                    }
