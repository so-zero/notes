const HttpError = require("../models/errorModel");
const Post = require("../models/postModel");

// Add Note
async function addNote(req, res, next) {
  try {
    const { title, content, tags } = req.body;

    const { id } = req.user;

    if (!title || !content || !tags) {
      return next(new HttpError("모든 필드를 입력해 주세요.", 400));
    }

    const newPost = await Post.create({
      title,
      content,
      tags: tags || [],
      userId: id,
    });

    res.status(201).json({
      message: "게시글이 등록되었습니다.",
      newPost,
    });
  } catch (error) {
    return next(new HttpError(error));
  }
}

// Edit Note
async function editNote(req, res, next) {
  try {
    const prevPost = await Post.findById(req.params.postId);

    if (!prevPost) {
      return next(new HttpError("게시글을 찾을 수 없습니다.", 404));
    }

    if (req.user.id !== prevPost.userId) {
      return next(new HttpError("게시글을 수정할 수 없습니다.", 400));
    }

    const { title, content, tags, isImportant } = req.body;

    if (!title && !content && !tags) {
      return next(new HttpError("변경된 내용이 없습니다.", 400));
    }

    if (title) {
      prevPost.title = title;
    }

    if (content) {
      prevPost.content = content;
    }

    if (tags) {
      prevPost.tags = tags;
    }

    if (isImportant) {
      prevPost.isImportant = isImportant;
    }

    await prevPost.save();

    res.status(200).json({ message: "게시글이 수정되었습니다.", prevPost });
  } catch (error) {
    return next(new HttpError(error));
  }
}

// Get All Note
async function getPosts(req, res, next) {
  try {
    const userId = req.user.id;

    const posts = await Post.find({ userId: userId }).sort({ isImportant: -1 });

    res.status(200).json(posts);
  } catch (error) {
    return next(new HttpError(error));
  }
}

// Delete Note
async function deleteNote(req, res, next) {
  try {
    const postId = req.params.postId;

    const post = await Post.findOne({ _id: postId, userId: req.user.id });

    if (!post) {
      return next(new HttpError("게시글이 없습니다.", 404));
    }

    await Post.deleteOne({ _id: postId, userId: req.user.id });

    res.status(200).json("게시글이 삭제되었습니다.");
  } catch (error) {
    return next(new HttpError(error));
  }
}

// Update Pin
async function updatePin(req, res, next) {
  try {
    const post = await Post.findById(req.params.postId);

    if (!post) {
      return next(new HttpError("게시글이 없습니다.", 404));
    }

    if (req.user.id !== post.userId) {
      return next(new HttpError("게시글이 없습니다.", 404));
    }

    const { isImportant } = req.body;

    post.isImportant = isImportant;

    await post.save();

    res.status(200).json({
      message: "게시글이 업데이트 되었습니다.",
      post,
    });
  } catch (error) {
    return next(new HttpError(error));
  }
}

module.exports = {
  addNote,
  editNote,
  getPosts,
  deleteNote,
  updatePin,
};
