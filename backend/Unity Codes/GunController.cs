using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GunController : MonoBehaviour
{
    public float sensitivity = 2f;
    public Transform gunBody;

    private float scrollInput;
    private float mouseY;
    private float rotationLimit = 90f;

    private void Update()
    {
        scrollInput = Input.GetAxis("Mouse ScrollWheel");
        mouseY += scrollInput * sensitivity;
        mouseY = Mathf.Clamp(mouseY, -rotationLimit, rotationLimit);

        // Rotate the gun vertically based on scroll wheel input
        gunBody.localRotation = Quaternion.Euler(-mouseY, 0f, 0f);
    }
}
