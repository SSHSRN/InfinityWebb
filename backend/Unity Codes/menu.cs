using System.Collections;
using System.Collections.Generic;
using UnityEngine.SceneManagement;
using UnityEngine;

public class menu : MonoBehaviour
{
  CursorLockMode wantedMode;

  void Start()
  {
    wantedMode = CursorLockMode.None;
    Cursor.lockState = wantedMode;
    Cursor.visible = true;
  }
  public void Playgame()
  {
    SceneManager.LoadScene(1);

  } public void Levels()
  {
    SceneManager.LoadScene(1);

  }
  public void Quitgame()
  {
    Debug.Log("Quit");
    Application.Quit();
  }
}
