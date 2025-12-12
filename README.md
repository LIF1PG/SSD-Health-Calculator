# Smartmontools Setup and Usage Guide

## Installation

### Option A: Windows Installer

1. Go to: [Smartmontools Downloads](https://www.smartmontools.org)
2. Click `Downloads` → `Windows` → choose the Windows installer (64‑bit if your Windows is 64‑bit).
3. Run the installer and finish setup.

### Option B: Portable ZIP (no install)

1. On the same downloads page, pick the Windows ZIP package (64‑bit).
2. Extract it to e.g., `C:\smartmontools`.

## Running Smartmontools

### Using the Installed Version

1. Open Command Prompt as Administrator.
2. Run the following commands:
   
```sh
"C:\Program Files\smartmontools\bin\smartctl.exe" --scan
"C:\Program Files\smartmontools\bin\smartctl.exe" -a -d nvme \.\PhysicalDrive0
```

1. Find “Data Units Written” in the output. Convert to TB:
```sh
TB ≈ DataUnits × 512000 / 1e12
```

### Using the Portable Version

1. Open Command Prompt as Administrator.
2. Run the following commands:
    ```sh
 cd C:\smartmontools\bin
 smartctl.exe --scan
 smartctl.exe -a -d nvme \.\PhysicalDrive0
    ```
3. Convert “Data Units Written” to TB as above.

### Quick PowerShell Command

To print TB (adjust drive number if needed), run:
```sh
powershell -NoProfile -Command "$du = (& 'C:\Program Files\smartmontools\bin\smartctl.exe' -a -d nvme \.\PhysicalDrive0 | Select-String 'Data Units Written').ToString() -replace '.Written:\s','' -replace '\s*[.*','' -replace ',',''; [math]::Round([double]$du * 512000 / 1e12, 2)"