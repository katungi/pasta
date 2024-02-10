use tauri::Manager;
use window_vibrancy::{apply_vibrancy, NSVisualEffectMaterial};
use std::time::{SystemTime, UNIX_EPOCH};

#[cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

#[tauri::command]
fn on_button_clicked() -> String {
    let start = SystemTime::now();
    let since_the_epoch = start
        .duration_since(UNIX_EPOCH)
        .expect("Time went backwards")
        .as_millis();
    format!("on_button_clicked called from Rust! (timestamp: {since_the_epoch}ms)")
}

fn main() {
    let context = tauri::generate_context!();
    tauri::Builder::default()
        .setup(|app| {
            let window = app.get_window("main").unwrap();

            // apply_acrylic(&window, Some((0, 0, 0, 10)));
            
            #[cfg(target_os = "macos")]
            apply_vibrancy(&window, NSVisualEffectMaterial::HudWindow, None, None)
                .expect("Unsupported platform! 'apply_vibrancy' is only supported on macOS");

            Ok(())
        })
        .plugin(tauri_plugin_clipboard::init())
        .invoke_handler(tauri::generate_handler![on_button_clicked])
        .run(context)
        .expect("error while running tauri application");
}
