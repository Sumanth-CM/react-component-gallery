// ColorPickerDemo.tsx (and similar for others)
function ColorPickerDemo() {
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <p style={{ margin: 0 }}>Select a color from the palette:</p>

        <div
          style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 8 }}
        >
          {[
            "#F44336",
            "#E91E63",
            "#9C27B0",
            "#3F51B5",
            "#03A9F4",
            "#00BCD4",
            "#4CAF50",
            "#8BC34A",
            "#FFEB3B",
            "#FF9800",
            "#795548",
            "#607D8B",
          ].map((c) => (
            <button
              key={c}
              title={c}
              onClick={() => {
                const preview = document.getElementById(
                  "colorPreview",
                ) as HTMLDivElement | null;
                const label = document.getElementById(
                  "selectedColor",
                ) as HTMLSpanElement | null;
                if (preview) preview.style.backgroundColor = c;
                if (label) label.textContent = c;
              }}
              style={{
                width: 36,
                height: 36,
                borderRadius: 6,
                border: "1px solid rgba(0,0,0,0.12)",
                background: c,
                cursor: "pointer",
                padding: 0,
              }}
              aria-label={`Select color ${c}`}
            />
          ))}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginTop: 12,
          }}
        >
          <div
            id="colorPreview"
            style={{
              width: 40,
              height: 40,
              borderRadius: 6,
              border: "1px solid rgba(0,0,0,0.12)",
              background: "transparent",
            }}
            aria-hidden={true}
          />
          <div>
            <div style={{ fontSize: 12, color: "#666" }}>Selected color</div>
            <span id="selectedColor" style={{ fontWeight: 600 }}>
              None
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ColorPickerDemo;
