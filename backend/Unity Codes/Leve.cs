using System.Collections;
using System.Collections.Generic;
using UnityEngine.SceneManagement;
using UnityEngine;

public class Leve : MonoBehaviour
{
  CursorLockMode wantedMode;

  void Start()
  {
    wantedMode = CursorLockMode.None;
    Cursor.lockState = wantedMode;
    Cursor.visible = true;
  }
  public void Mazegame()
  {
    SceneManager.LoadScene(4);

  } public void Water()
  {
    SceneManager.LoadScene(2);

  }
  public void Snow()
  {
    SceneManager.LoadScene(3);
  }
}
