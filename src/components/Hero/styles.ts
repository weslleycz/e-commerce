export const styles = (matches: boolean) => {
    return matches
        ? {
              background:
                  "conic-gradient(from 270deg at 67.98% 100%, #5710F2 0deg, #6036BD 360deg)",
              justifyContent: "center",
              alignItems: "center",
              display: "grid",
          }
        : {
              background:
                  "conic-gradient(from 270deg at 67.98% 100%, #5710F2 0deg, #6036BD 360deg)",
              justifyContent: "center",
              alignItems: "center",
              display: "grid",
              gap: 1,
          };
};
