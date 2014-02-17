BIN = ./node_modules/.bin

test-cov: istanbul

instanbul: lib
    $(BIN)/istanbul instrument --output lib-cov --no-compact --variable global.__coverage__ lib
