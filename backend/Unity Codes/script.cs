using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class script : MonoBehaviour
{
    public Animator playerAnim;
    public Rigidbody playerRigid;
    public Transform playerModelTransform;
    public Transform cameraTransform;
    public float walkSpeed;
    public bool walking;
    public float mouseSensitivity = 100f;
    private float mouseXRotation = 0f;
    private float mouseYRotation = 0f;

    private void Start()
    {
        // Lock the cursor at the center of the screen
        Cursor.lockState = CursorLockMode.Locked;
    }

    private void FixedUpdate()
    {
        // Handle player movement based on input
        float verticalInput = Input.GetAxis("Vertical");
        Vector3 movement = transform.forward * verticalInput * walkSpeed * Time.fixedDeltaTime;
        playerRigid.MovePosition(playerRigid.position + movement);

        float horizontalInput = Input.GetAxis("Horizontal");
        Vector3 rotation = new Vector3(0f, horizontalInput, 0f) * mouseSensitivity * Time.fixedDeltaTime;
        playerRigid.MoveRotation(playerRigid.rotation * Quaternion.Euler(rotation));

        mouseXRotation += Input.GetAxis("Mouse X") * mouseSensitivity * Time.fixedDeltaTime;
        mouseYRotation -= Input.GetAxis("Mouse Y") * mouseSensitivity * Time.fixedDeltaTime;

        mouseYRotation = Mathf.Clamp(mouseYRotation, -90f, 90f);

        playerModelTransform.localRotation = Quaternion.Euler(0f, mouseXRotation, 0f);
    }

    private void Update()
    {
        // Handle player animation triggers based on input
        if (Input.GetKeyDown(KeyCode.W))
        {
            playerAnim.SetTrigger("walk");
            playerAnim.ResetTrigger("idle");
            walking = true;
        }
        if (Input.GetKeyUp(KeyCode.W))
        {
            playerAnim.SetTrigger("idle");
            playerAnim.ResetTrigger("walk");
            walking = false;
        }

        if (Input.GetKeyDown(KeyCode.S))
        {
            playerAnim.SetTrigger("walking back");
            playerAnim.ResetTrigger("idle");
            walking = true;
        }
        if (Input.GetKeyUp(KeyCode.S))
        {
            playerAnim.SetTrigger("idle");
            playerAnim.ResetTrigger("walking back");
            walking = false;
        }

        if (Input.GetKeyDown(KeyCode.C))
        {
            playerAnim.SetTrigger("crouch");
            playerAnim.ResetTrigger("idle");
            walking = true;
        }
        if (Input.GetKeyUp(KeyCode.C))
        {
            playerAnim.SetTrigger("idle");
            playerAnim.ResetTrigger("crouch");
            walking = false;
        }

        if (Input.GetKeyDown(KeyCode.Space))
        {
            playerAnim.SetTrigger("jumping");
            playerAnim.ResetTrigger("idle");
            walking = true;
        }
        if (Input.GetKeyUp(KeyCode.Space))
        {
            playerAnim.SetTrigger("idle");
            playerAnim.ResetTrigger("jumping");
            walking = false;
        }
    }
}
